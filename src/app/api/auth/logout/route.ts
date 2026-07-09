import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE } from "@/lib/auth";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/login", request.nextUrl.origin));
  response.cookies.delete(SESSION_COOKIE);
  return response;
}
