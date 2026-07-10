import { GOLD, GOLD_DARK, INK, LINE, DISPLAY_FONT } from "./Landingtokens";

export function Eyebrow({ children }) {
  return (
    <p
      className="text-xs font-semibold uppercase mb-4"
      style={{ color: GOLD, letterSpacing: "0.22em", fontFamily: DISPLAY_FONT }}
    >
      {children}
    </p>
  );
}

export function GoldButton({ href = "#", children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-md text-sm font-semibold transition-colors ${className}`}
      style={{ background: GOLD, color: INK }}
      onMouseEnter={(e) => (e.currentTarget.style.background = GOLD_DARK)}
      onMouseLeave={(e) => (e.currentTarget.style.background = GOLD)}
    >
      {children}
    </a>
  );
}

export function GhostButton({ href = "#", children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-md text-sm font-semibold text-slate-200 transition-colors hover:text-slate-50 ${className}`}
      style={{ border: `1px solid ${LINE}` }}
    >
      {children}
    </a>
  );
}
