import { NextRequest, NextResponse } from "next/server";
import { createSessionCookieValue, isEmailAllowed, sessionCookieOptions, SESSION_COOKIE } from "@/lib/auth";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const expectedState = request.cookies.get("site_oauth_state")?.value;
  const redirectTo = request.cookies.get("site_oauth_redirect")?.value ?? "/";

  if (!code || !state || !expectedState || state !== expectedState) {
    return NextResponse.redirect(new URL("/login?error=state", origin));
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return new NextResponse("Google OAuth ist nicht konfiguriert.", { status: 500 });
  }

  const redirectUri = new URL("/api/auth/google/callback", origin).toString();

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }),
  });

  if (!tokenResponse.ok) {
    return NextResponse.redirect(new URL("/login?error=token", origin));
  }

  const tokenData = (await tokenResponse.json()) as { access_token?: string };
  if (!tokenData.access_token) {
    return NextResponse.redirect(new URL("/login?error=token", origin));
  }

  const userInfoResponse = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });

  if (!userInfoResponse.ok) {
    return NextResponse.redirect(new URL("/login?error=userinfo", origin));
  }

  const userInfo = (await userInfoResponse.json()) as { email?: string; email_verified?: boolean };

  if (!userInfo.email || !userInfo.email_verified || !isEmailAllowed(userInfo.email)) {
    return NextResponse.redirect(new URL("/login?error=forbidden", origin));
  }

  const safeRedirect = redirectTo.startsWith("/") ? redirectTo : "/";
  const response = NextResponse.redirect(new URL(safeRedirect, origin));
  response.cookies.set(SESSION_COOKIE, createSessionCookieValue(userInfo.email), sessionCookieOptions);
  response.cookies.delete("site_oauth_state");
  response.cookies.delete("site_oauth_redirect");
  return response;
}
