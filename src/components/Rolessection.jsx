import { LayoutDashboard, ShieldCheck, HardHat, CheckCircle2 } from "lucide-react";
import { GOLD, STEEL, LINE, FOG, DISPLAY_FONT } from "../utils/Landingtokens";
import { Eyebrow } from "../utils/Landingprimitives";

const ROLES = [
  {
    icon: LayoutDashboard,
    role: "Admins",
    blurb: "Run the whole portfolio — people, projects, and reporting — from one dashboard.",
    points: [
      "Create projects and invite collaborators",
      "Manage users across every role",
      "Risk heatmap and document activity at a glance",
    ],
  },
  {
    icon: ShieldCheck,
    role: "Insurers",
    blurb: "See the true state of every insured site without chasing emails or PDFs.",
    points: [
      "Live project summaries and latest reports",
      "Contractor performance in one panel",
      "Read access scoped to your policies",
    ],
  },
  {
    icon: HardHat,
    role: "Engineers",
    blurb: "Plan visits, capture evidence on site, and file reports before you leave the gate.",
    points: [
      "Visit calendar with follow-up tasks",
      "Photo capture tied to each visit",
      "One-tap completion and sign-off",
    ],
  },
];

function RoleCard({ icon: Icon, role, blurb, points }) {
  return (
    <div
      className="rounded-lg p-7 flex flex-col gap-4 transition-colors duration-200 hover:border-yellow-700/60"
      style={{ background: STEEL, border: `1px solid ${LINE}` }}
    >
      <div
        className="w-11 h-11 rounded-md flex items-center justify-center"
        style={{
          background: "rgba(204,160,48,0.10)",
          border: "1px solid rgba(204,160,48,0.35)",
        }}
      >
        <Icon size={20} style={{ color: GOLD }} />
      </div>
      <h3 className="text-lg font-bold text-slate-100" style={{ fontFamily: DISPLAY_FONT }}>
        {role}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: FOG }}>
        {blurb}
      </p>
      <ul className="mt-1 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-slate-300">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: GOLD }} />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RolesSection() {
  return (
    <section id="roles" className="py-20" style={{ borderTop: `1px solid ${LINE}` }}>
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow>One platform, three seats</Eyebrow>
        <h2
          className="text-3xl md:text-4xl font-extrabold text-slate-50 max-w-2xl"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          The same project, seen from every side of the contract.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {ROLES.map((r) => (
            <RoleCard key={r.role} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
