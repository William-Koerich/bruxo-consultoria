"use client";

import { useState } from "react";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";

const NAV = [
  { href: "#resultados", label: "Resultados" },
  { href: "#sobre", label: "Sobre" },
  { href: "#redes", label: "Redes" },
];

export default function Header({ whatsappHref }: { whatsappHref: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-black uppercase tracking-widest">
          Bruxo<span className="text-gold">.</span>
        </a>

        <nav className="hidden gap-8 text-sm font-semibold uppercase tracking-wide text-white/70 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-gold">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2 text-xs font-bold uppercase tracking-wide text-black transition-colors hover:bg-gold/90 md:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Falar no WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="text-white md:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-wide text-white/80">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-xs font-bold uppercase tracking-wide text-black"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
