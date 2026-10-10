"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type RailItem = {
  id: string;
  label: string;
  index: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export default function DesktopExperience() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [railItems, setRailItems] = useState<RailItem[]>([]);
  const [activeSectionId, setActiveSectionId] = useState("");

  const showRail = useMemo(() => pathname === "/" && railItems.length >= 5, [pathname, railItems.length]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!desktop.matches || reducedMotion.matches) return;

    const root = document.documentElement;
    root.classList.add("desktop-premium");

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    sections.forEach((section, index) => {
      if (!section.id) section.id = `secao-${index + 1}`;
      if (section.id !== "inicio") section.classList.add("premium-reveal-section");
    });

    const items = sections.map((section, index) => {
      const editorial = section.querySelector<HTMLElement>(".editorial-label")?.textContent?.trim();
      const heading = section.querySelector<HTMLElement>("h2, h1")?.textContent?.trim();
      const label = section.id === "inicio" ? "Início" : editorial || heading || `Seção ${index + 1}`;
      return {
        id: section.id,
        label: label.length > 34 ? `${label.slice(0, 31)}…` : label,
        index: index + 1,
      };
    });

    setRailItems(items);
    if (items[0]) setActiveSectionId(items[0].id);

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-premium-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.04, rootMargin: "0px 0px -3% 0px" },
    );

    sections.filter((section) => section.id !== "inicio").forEach((section) => revealObserver.observe(section));

    const activeObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
        if (visible[0]) setActiveSectionId((visible[0].target as HTMLElement).id);
      },
      { threshold: 0, rootMargin: "-36% 0px -54% 0px" },
    );

    sections.forEach((section) => activeObserver.observe(section));

    const hero = document.getElementById("inicio");
    const heroGrid = hero?.querySelector<HTMLElement>(".grid.items-center");
    const heroCopy = heroGrid?.children.item(0) as HTMLElement | null;
    const heroVisual = heroGrid?.children.item(1) as HTMLElement | null;

    heroCopy?.classList.add("hero-cinematic-copy");
    heroVisual?.classList.add("hero-cinematic-visual");

    let scrollFrame = 0;
    const updateProgress = () => {
      scrollFrame = 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = clamp(window.scrollY / maxScroll, 0, 1);
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
    };

    const requestScrollUpdate = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(updateProgress);
    };

    const updateHeroPointer = (event: PointerEvent) => {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / Math.max(1, rect.width)) * 100;
      const y = ((event.clientY - rect.top) / Math.max(1, rect.height)) * 100;
      hero.style.setProperty("--hero-pointer-x", `${clamp(x, 0, 100)}%`);
      hero.style.setProperty("--hero-pointer-y", `${clamp(y, 0, 100)}%`);
    };

    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    hero?.addEventListener("pointermove", updateHeroPointer, { passive: true });
    updateProgress();

    const cleanups: Array<() => void> = [];

    if (finePointer.matches) {
      let pointerFrame = 0;
      let pointerX = -100;
      let pointerY = -100;

      const renderPointer = () => {
        pointerFrame = 0;
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
        }
      };

      const onWindowPointerMove = (event: PointerEvent) => {
        pointerX = event.clientX;
        pointerY = event.clientY;
        if (!pointerFrame) pointerFrame = window.requestAnimationFrame(renderPointer);
      };

      const onPointerOver = (event: PointerEvent) => {
        const target = (event.target as Element | null)?.closest("a, button, .premium-card, .premium-glass, .premium-dark");
        cursorRef.current?.classList.toggle("is-interactive", Boolean(target));
      };

      window.addEventListener("pointermove", onWindowPointerMove, { passive: true });
      window.addEventListener("pointerover", onPointerOver, { passive: true });

      cleanups.push(() => {
        window.removeEventListener("pointermove", onWindowPointerMove);
        window.removeEventListener("pointerover", onPointerOver);
        if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      });

      const surfaces = Array.from(
        document.querySelectorAll<HTMLElement>(".premium-card, .premium-glass, .premium-dark"),
      ).filter((surface) => !surface.classList.contains("floating-card") && surface.offsetWidth >= 170 && surface.offsetHeight >= 90);

      surfaces.forEach((surface) => {
        surface.classList.add("premium-pointer-surface");

        const onMove = (event: PointerEvent) => {
          const rect = surface.getBoundingClientRect();
          const px = clamp((event.clientX - rect.left) / Math.max(1, rect.width), 0, 1);
          const py = clamp((event.clientY - rect.top) / Math.max(1, rect.height), 0, 1);
          surface.style.setProperty("--surface-x", `${px * 100}%`);
          surface.style.setProperty("--surface-y", `${py * 100}%`);
          surface.style.setProperty("--tilt-x", `${(0.5 - py) * 3.2}deg`);
          surface.style.setProperty("--tilt-y", `${(px - 0.5) * 4.2}deg`);
          surface.classList.add("is-pointer-active");
        };

        const onLeave = () => {
          surface.classList.remove("is-pointer-active");
          surface.style.setProperty("--tilt-x", "0deg");
          surface.style.setProperty("--tilt-y", "0deg");
        };

        surface.addEventListener("pointermove", onMove, { passive: true });
        surface.addEventListener("pointerleave", onLeave, { passive: true });

        cleanups.push(() => {
          surface.removeEventListener("pointermove", onMove);
          surface.removeEventListener("pointerleave", onLeave);
          surface.classList.remove("premium-pointer-surface", "is-pointer-active");
          surface.style.removeProperty("--surface-x");
          surface.style.removeProperty("--surface-y");
          surface.style.removeProperty("--tilt-x");
          surface.style.removeProperty("--tilt-y");
        });
      });

      const magneticButtons = Array.from(
        document.querySelectorAll<HTMLElement>("a.btn-primary, a.btn-outline, button.btn-primary, button.btn-outline"),
      );

      magneticButtons.forEach((button) => {
        button.classList.add("premium-magnetic");

        const onMove = (event: PointerEvent) => {
          const rect = button.getBoundingClientRect();
          const dx = clamp((event.clientX - (rect.left + rect.width / 2)) * 0.06, -3.5, 3.5);
          const dy = clamp((event.clientY - (rect.top + rect.height / 2)) * 0.08, -3, 3);
          button.style.setProperty("--mag-x", `${dx}px`);
          button.style.setProperty("--mag-y", `${dy}px`);
        };

        const onLeave = () => {
          button.style.setProperty("--mag-x", "0px");
          button.style.setProperty("--mag-y", "0px");
        };

        button.addEventListener("pointermove", onMove, { passive: true });
        button.addEventListener("pointerleave", onLeave, { passive: true });

        cleanups.push(() => {
          button.removeEventListener("pointermove", onMove);
          button.removeEventListener("pointerleave", onLeave);
          button.classList.remove("premium-magnetic");
          button.style.removeProperty("--mag-x");
          button.style.removeProperty("--mag-y");
        });
      });
    }

    return () => {
      revealObserver.disconnect();
      activeObserver.disconnect();
      window.removeEventListener("scroll", requestScrollUpdate);
      hero?.removeEventListener("pointermove", updateHeroPointer);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      cleanups.forEach((cleanup) => cleanup());
      sections.forEach((section) => section.classList.remove("premium-reveal-section", "is-premium-visible"));
      heroCopy?.classList.remove("hero-cinematic-copy");
      heroVisual?.classList.remove("hero-cinematic-visual");
      root.classList.remove("desktop-premium");
      setRailItems([]);
    };
  }, [pathname]);

  const goToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 92;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <div className="desktop-scroll-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>

      <div ref={cursorRef} className="premium-cursor-orb" aria-hidden="true" />

      {showRail ? (
        <nav className="premium-section-rail" aria-label="Navegação pelas seções da página">
          <div className="premium-section-rail-line" aria-hidden="true" />
          {railItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`premium-section-rail-item ${activeSectionId === item.id ? "is-active" : ""}`}
              onClick={() => goToSection(item.id)}
              aria-label={`Ir para ${item.label}`}
            >
              <span className="premium-section-rail-label">{item.label}</span>
              <span className="premium-section-rail-index">{String(item.index).padStart(2, "0")}</span>
              <span className="premium-section-rail-dot" aria-hidden="true" />
            </button>
          ))}
        </nav>
      ) : null}
    </>
  );
}
