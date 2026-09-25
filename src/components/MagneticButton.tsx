"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}) {
  if (href) {
    return (
      <a href={href} className={`inline-block hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`inline-block hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 ${className}`}>
      {children}
    </button>
  );
}
