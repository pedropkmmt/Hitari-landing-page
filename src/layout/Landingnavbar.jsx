import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GOLD, INK, LINE, FOG, DISPLAY_FONT } from "../utils/Landingtokens";
import { GoldButton } from "../utils/Landingprimitives";

export function LogoMark({ size = 32 }) {
  return (
    <span
      className="rounded-sm flex items-center justify-center"
      style={{ width: size, height: size, border: `1.5px solid ${GOLD}` }}
    >
      <span
        className="rounded-full"
        style={{ width: size / 4, height: size / 4, background: GOLD }}
      />
    </span>
  );
}

const NAV_LINKS = [
  { href: "#roles", label: "Who it's for" },
  { href: "#workflow", label: "How it works" },
  { href: "#trust", label: "Why Hitari" },
];

export default function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur"
      style={{ background: "rgba(11,14,19,0.82)", borderBottom: `1px solid ${LINE}` }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5" aria-label="Hitari home">
         <img src="/hitari-logo.png" alt="Hitari Logo" width={80} />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: FOG }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-slate-100 transition-colors">
              {l.label}
            </a>
          ))}
          <GoldButton href="#cta" className="px-4 py-2">Request a demo</GoldButton>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-200"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-5 pt-1 flex flex-col gap-4 text-sm"
          style={{ color: FOG, borderBottom: `1px solid ${LINE}` }}
        >
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <GoldButton href="#cta" className="px-4 py-2 w-fit">
            Request a demo
          </GoldButton>
        </div>
      )}
    </header>
  );
}
