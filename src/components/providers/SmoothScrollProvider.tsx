"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Buttery smooth interpolation (premium feel)
      wheelMultiplier: 1.1, // Slightly faster wheel for better responsiveness
      smoothWheel: true,
      syncTouch: true, // Syncs touch scroll with Lenis
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
