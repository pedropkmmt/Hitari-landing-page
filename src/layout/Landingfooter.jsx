import { LINE, FOG, DISPLAY_FONT } from "../utils/Landingtokens";
import { LogoMark } from "./Landingnavbar";

const FOOTER_LINKS = [
  { href: "#roles", label: "Roles" },
  { href: "#workflow", label: "Workflow" },
  { href: "#cta", label: "Demo" },
];

export default function LandingFooter() {
  return (
    <footer style={{ borderTop: `1px solid ${LINE}` }}>
      <div
        className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
        style={{ color: FOG }}
      >
        <div className="flex items-center gap-2">
          <LogoMark size={20} />
          <span
            className="font-bold tracking-wide text-slate-300"
            style={{ fontFamily: DISPLAY_FONT }}
          >
            HITARI
          </span>
        </div>
        <p>© {new Date().getFullYear()} Hitari. Site inspection, insured.</p>
        <div className="flex gap-6">
          {FOOTER_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-slate-200 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
