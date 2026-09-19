"use client";
import * as React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { makeStore, type AppStore } from "@/store/store";

export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = React.useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
        <Toaster position="top-center" />
      </ThemeProvider>
    </Provider>
  );
}
