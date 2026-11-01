"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type RailItem = { id: string; label: string; index: number };
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export default function DesktopExperience() {
  const pathname = usePathname();
  const cursorRef = useRef<HTMLDivElement>(null);
  const [railItems, setRailItems] = useState<RailItem[]>([]);
  const [activeSectionId, setActiveSectionId] = useState("");
  const showRail = useMemo(() => pathname === "/" && railItems.length >= 5, [pathname, railItems.length]);
  const activeIndex = Math.max(0, railItems.findIndex((item) => item.id === activeSectionId));
  const railProgress = railItems.length > 1 ? (activeIndex / (railItems.length - 1)) * 100 : 0;

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!desktop.matches || reducedMotion.matches) return;

    const root = document.documentElement;
    const cursor = cursorRef.current;
    root.classList.add("desktop-premium");
    root.dataset.activeTone = "light";

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    const headerSectionLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('header nav a[href*="#"]'));

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

    const updateHeaderActive = (sectionId: string) => {
      headerSectionLinks.forEach((link) => {
        const active = link.hash === `#${sectionId}`;
        link.classList.toggle("is-section-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else if (link.getAttribute("aria-current") === "location") link.removeAttribute("aria-current");
      });
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-premium-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.025, rootMargin: "0px 0px -1% 0px" },
    );

    sections
      .filter((section) => section.id !== "inicio")
      .forEach((section) => revealObserver.observe(section));

    const activeObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));

        if (!visible[0]) return;
        const section = visible[0].target as HTMLElement;
        setActiveSectionId(section.id);
        root.dataset.activeSection = section.id;
        root.dataset.activeTone = section.dataset.tone === "dark" ? "dark" : "light";
        updateHeaderActive(section.id);
      },
      { threshold: 0, rootMargin: "-36% 0px -54% 0px" },
    );

    sections.forEach((section) => activeObserver.observe(section));

    const hero = document.getElementById("inicio");
    const updateHeroPointer = (event: PointerEvent) => {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty(
        "--hero-pointer-x",
        `${clamp(((event.clientX - rect.left) / Math.max(1, rect.width)) * 100, 0, 100)}%`,
      );
      hero.style.setProperty(
        "--hero-pointer-y",
        `${clamp(((event.clientY - rect.top) / Math.max(1, rect.height)) * 100, 0, 100)}%`,
      );
    };

    let cursorFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const paintCursor = () => {
      cursorFrame = 0;
      if (!cursor) return;
      cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      cursor.classList.add("is-visible");
    };

    const updateCursorPosition = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!cursorFrame) cursorFrame = window.requestAnimationFrame(paintCursor);
    };

    const updateCursorContext = (event: PointerEvent) => {
      if (!cursor) return;
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-cursor-label], a, button") : null;
      const label = target?.dataset.cursorLabel?.trim();
      cursor.classList.toggle("is-interactive", Boolean(target));
      cursor.classList.toggle("is-labeled", Boolean(label));
      if (label) cursor.dataset.label = label;
      else delete cursor.dataset.label;
    };

    const hideCursor = () => cursor?.classList.remove("is-visible", "is-interactive", "is-labeled");

    if (finePointer.matches) {
      hero?.addEventListener("pointermove", updateHeroPointer, { passive: true });
      window.addEventListener("pointermove", updateCursorPosition, { passive: true });
      document.addEventListener("pointerover", updateCursorContext, { passive: true });
      document.documentElement.addEventListener("mouseleave", hideCursor);
    }

    return () => {
      revealObserver.disconnect();
      activeObserver.disconnect();
      hero?.removeEventListener("pointermove", updateHeroPointer);
      window.removeEventListener("pointermove", updateCursorPosition);
      document.removeEventListener("pointerover", updateCursorContext);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
      if (cursorFrame) window.cancelAnimationFrame(cursorFrame);
      sections.forEach((section) => section.classList.remove("premium-reveal-section", "is-premium-visible"));
      headerSectionLinks.forEach((link) => {
        link.classList.remove("is-section-active");
        if (link.getAttribute("aria-current") === "location") link.removeAttribute("aria-current");
      });
      cursor?.classList.remove("is-visible", "is-interactive", "is-labeled");
      cursor?.removeAttribute("data-label");
      root.classList.remove("desktop-premium");
      delete root.dataset.activeTone;
      delete root.dataset.activeSection;
      setRailItems([]);
    };
  }, [pathname]);

  const goToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 92,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div ref={cursorRef} className="premium-cursor-orb" aria-hidden="true" />
      {showRail ? (
        <nav className="premium-section-rail" aria-label="Navegação pelas seções da página">
          <div className="premium-section-rail-line" aria-hidden="true" />
          <div className="premium-section-rail-progress" style={{ height: `${railProgress}%` }} aria-hidden="true" />
          {railItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`premium-section-rail-item ${activeSectionId === item.id ? "is-active" : ""}`}
              onClick={() => goToSection(item.id)}
              aria-label={`Ir para ${item.label}`}
              aria-current={activeSectionId === item.id ? "location" : undefined}
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
