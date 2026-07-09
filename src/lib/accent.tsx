"use client";

import { createContext, useCallback, useContext, useRef } from "react";
import { defaultAccent } from "@/lib/content";

type AccentContextValue = {
  setAccent: (color: string | null) => void;
};

const AccentContext = createContext<AccentContextValue>({ setAccent: () => {} });

function toSoft(hex: string, opacity = 0.55) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function AccentProvider({ children }: { children: React.ReactNode }) {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setAccent = useCallback((color: string | null) => {
    if (timeout.current) clearTimeout(timeout.current);
    const target = color ?? defaultAccent;
    const root = document.documentElement;
    root.style.setProperty("--live-accent", target);
    root.style.setProperty("--live-accent-soft", toSoft(target));
  }, []);

  return <AccentContext.Provider value={{ setAccent }}>{children}</AccentContext.Provider>;
}

export function useAccent() {
  return useContext(AccentContext);
}
