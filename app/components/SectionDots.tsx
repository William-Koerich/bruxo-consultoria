"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Início" },
  { id: "resultados", label: "Resultados" },
  { id: "sobre", label: "Sobre" },
  { id: "trajetoria", label: "Trajetória" },
  { id: "metodo", label: "Método" },
  { id: "redes", label: "Redes" },
];

export default function SectionDots() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
      {SECTIONS.map((s) => (
        <a key={s.id} href={`#${s.id}`} aria-label={s.label} className="group flex items-center justify-end">
          <span className="pointer-events-none mr-3 whitespace-nowrap rounded-full bg-black/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100">
            {s.label}
          </span>
          <span
            className={`h-2.5 w-2.5 rounded-full border transition-all ${
              active === s.id ? "scale-125 border-gold bg-gold" : "border-white/40 bg-transparent"
            }`}
          />
        </a>
      ))}
    </div>
  );
}
