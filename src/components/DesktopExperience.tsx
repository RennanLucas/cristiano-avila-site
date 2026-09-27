"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function DesktopExperience() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!desktop.matches || reducedMotion.matches) return;

    const root = document.documentElement;
    root.classList.add("desktop-premium");

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section")).filter(
      (section) => section.id !== "inicio",
    );

    sections.forEach((section) => section.classList.add("premium-reveal-section"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-premium-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    const hero = document.getElementById("inicio");
    const heroGrid = hero?.querySelector<HTMLElement>(".grid.items-center");
    const heroCopy = heroGrid?.children.item(0) as HTMLElement | null;
    const heroVisual = heroGrid?.children.item(1) as HTMLElement | null;

    heroCopy?.classList.add("hero-cinematic-copy");
    heroVisual?.classList.add("hero-cinematic-visual");

    let scrollFrame = 0;
    const updateScrollEffects = () => {
      scrollFrame = 0;

      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;

      if (hero) {
        const rect = hero.getBoundingClientRect();
        const heroProgress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
        hero.style.setProperty("--hero-copy-y", `${heroProgress * -14}px`);
        hero.style.setProperty("--hero-visual-y", `${heroProgress * 22}px`);
      }
    };

    const requestScrollUpdate = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(updateScrollEffects);
    };

    const updatePointer = (event: PointerEvent) => {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / Math.max(1, rect.width)) * 100;
      const y = ((event.clientY - rect.top) / Math.max(1, rect.height)) * 100;
      hero.style.setProperty("--hero-pointer-x", `${Math.min(100, Math.max(0, x))}%`);
      hero.style.setProperty("--hero-pointer-y", `${Math.min(100, Math.max(0, y))}%`);
    };

    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    hero?.addEventListener("pointermove", updatePointer, { passive: true });
    updateScrollEffects();

    let cancelled = false;
    let rafId = 0;
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;

    import("@studio-freight/lenis").then(({ default: Lenis }) => {
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        wheelMultiplier: 0.88,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = window.requestAnimationFrame(raf);
      };

      rafId = window.requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener("scroll", requestScrollUpdate);
      hero?.removeEventListener("pointermove", updatePointer);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      if (rafId) window.cancelAnimationFrame(rafId);
      lenis?.destroy();
      sections.forEach((section) => section.classList.remove("premium-reveal-section", "is-premium-visible"));
      heroCopy?.classList.remove("hero-cinematic-copy");
      heroVisual?.classList.remove("hero-cinematic-visual");
      root.classList.remove("desktop-premium");
    };
  }, [pathname]);

  return (
    <div className="desktop-scroll-progress" aria-hidden="true">
      <span ref={progressRef} />
    </div>
  );
}
