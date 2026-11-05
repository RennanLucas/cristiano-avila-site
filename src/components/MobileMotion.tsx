"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive enhancement: elements remain visible even if JavaScript fails
 * or Safari delays the observer. Native scroll is never intercepted.
 */
const REVEAL_SELECTOR = [
  ".hero-copy",
  ".hero-visual",
  ".editorial-label",
  "h1",
  "h2",
  "p",
  "article",
  ".specialty-row",
  ".method-step",
  ".faq-row",
  ".premium-glass",
  ".premium-dark",
  ".premium-card",
  ".cta-meta-card",
  ".btn-primary",
  ".btn-outline",
].join(", ");

export default function MobileMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const motionAllowed = window.matchMedia(
      "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
    );

    if (!motionAllowed.matches || !("IntersectionObserver" in window)) return;

    const running = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const element = entry.target as HTMLElement;
          observer.unobserve(element);

          // Photo/large panels fade without changing their geometry.
          const isLargeVisual = element.classList.contains("hero-visual");
          const frames = isLargeVisual
            ? [{ opacity: 0.84 }, { opacity: 1 }]
            : [
                { opacity: 0.84, transform: "translate3d(0, 10px, 0)" },
                { opacity: 1, transform: "translate3d(0, 0, 0)" },
              ];

          const animation = element.animate(frames, {
            duration: isLargeVisual ? 260 : 320,
            easing: "cubic-bezier(0.2, 0.7, 0.2, 1)",
            fill: "none",
          });

          running.add(animation);
          const finish = () => running.delete(animation);
          animation.addEventListener("finish", finish, { once: true });
          animation.addEventListener("cancel", finish, { once: true });
        }
      },
      { threshold: 0.03, rootMargin: "0px 0px -6% 0px" },
    );

    // Observe meaningful elements rather than applying hidden states to sections.
    // Nested cards animate as a unit, keeping text readable during fast swipes.
    document.querySelectorAll<HTMLElement>("main section").forEach((section) => {
      const selected: HTMLElement[] = [];
      let narrativeParagraphs = 0;

      for (const element of section.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)) {
        if (selected.length >= 20) break;
        if (element.closest("section") !== section) continue;
        if (element.closest("[aria-hidden='true'], header, footer")) continue;
        if (!element.getClientRects().length) continue;
        if (selected.some((parent) => parent.contains(element))) continue;

        if (element.tagName === "P") {
          narrativeParagraphs += 1;
          if (narrativeParagraphs > 2) continue;
        }

        selected.push(element);
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      running.forEach((animation) => animation.cancel());
      running.clear();
    };
  }, [pathname]);

  return null;
}
