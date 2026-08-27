import type { ComponentType } from "react";

export default function SocialButton({
  href,
  icon: Icon,
  label,
  handle,
  emphasis = false,
}: {
  href: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
  handle: string;
  emphasis?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 rounded-full border px-6 py-4 transition-colors ${
        emphasis
          ? "border-gold bg-gold text-black hover:bg-gold/90"
          : "border-white/15 bg-white/5 text-white hover:border-gold/60 hover:bg-white/10"
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          emphasis ? "bg-black/10" : "bg-white/10"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="flex flex-col text-left leading-tight">
        <span className="text-sm font-semibold uppercase tracking-wide">{label}</span>
        <span className={emphasis ? "text-black/70" : "text-white/60"}>{handle}</span>
      </span>
    </a>
  );
}
