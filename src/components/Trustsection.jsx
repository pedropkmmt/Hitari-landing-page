import { CheckCircle2 } from "lucide-react";
import { GOLD, LINE, FOG, DISPLAY_FONT } from "../utils/Landingtokens";
import { Eyebrow } from "../utils/Landingprimitives";

const REASONS = [
  [
    "Role-scoped access",
    "Admins, insurers, and engineers each see precisely what their role permits, nothing more.",
  ],
  [
    "Evidence with provenance",
    "Every photo and finding is tied to a specific visit, engineer, and timestamp.",
  ],
  [
    "Audit-ready exports",
    "Print-ready report exports with signatures for underwriting and claims files.",
  ],
  [
    "A live risk picture",
    "Dashboards surface risk and activity across the portfolio, not project by project.",
  ],
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-20" style={{ borderTop: `1px solid ${LINE}` }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Eyebrow>Why teams switch</Eyebrow>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-slate-50"
            style={{ fontFamily: DISPLAY_FONT }}
          >
            Paper trails were built for filing cabinets. Yours lives on site.
          </h2>
          <p className="mt-6 text-base leading-relaxed max-w-md" style={{ color: FOG }}>
            Inspection records scattered across inboxes and shared drives are a
            liability the day a claim arrives. Hitari keeps the visit, the
            evidence, the report, and the signature in one chain , scoped to
            exactly who is allowed to see it.
          </p>
        </div>
        <ul className="space-y-5">
          {REASONS.map(([title, text]) => (
            <li key={title} className="flex gap-4">
              <CheckCircle2 size={20} className="mt-1 shrink-0" style={{ color: GOLD }} />
              <div>
                <h3 className="font-bold text-slate-100" style={{ fontFamily: DISPLAY_FONT }}>
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: FOG }}>
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
