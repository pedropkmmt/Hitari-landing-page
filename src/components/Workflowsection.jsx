import { HardHat, Camera, FileBarChart, PenLine } from "lucide-react";
import { GOLD, INK, STEEL, LINE, FOG, DISPLAY_FONT } from "../utils/Landingtokens";
import { Eyebrow } from "../utils/Landingprimitives";

const STEPS = [
  {
    icon: HardHat,
    label: "Schedule the visit",
    text: "Engineers book site visits against a project: date, type, and scope straight from their calendar.",
  },
  {
    icon: Camera,
    label: "Capture on site",
    text: "Photos and notes attach to the visit as it happens, so evidence never lives on someone's phone.",
  },
  {
    icon: FileBarChart,
    label: "File the report",
    text: "Findings, KPIs, and challenges roll into a structured report entered manually or uploaded.",
  },
  {
    icon: PenLine,
    label: "Sign and share",
    text: "Signatures lock the record. Admins and insurers see the same report the moment it lands.",
  },
];

function WorkflowStep({ icon: Icon, label, text, last }) {
  return (
    <div className="relative flex-1 min-w-[220px]">
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          style={{ background: INK, border: `1px solid ${GOLD}` }}
        >
          <Icon size={17} style={{ color: GOLD }} />
        </div>
        {/* Connector line to the next step (desktop only) */}
        {!last && (
          <div
            className="hidden md:block h-px flex-1"
            style={{ background: `linear-gradient(90deg, ${GOLD}66, ${LINE})` }}
          />
        )}
      </div>
      <h4 className="mt-4 text-base font-bold text-slate-100" style={{ fontFamily: DISPLAY_FONT }}>
        {label}
      </h4>
      <p className="mt-2 text-sm leading-relaxed pr-6" style={{ color: FOG }}>
        {text}
      </p>
    </div>
  );
}

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="py-20"
      style={{ background: STEEL, borderTop: `1px solid ${LINE}` }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow>From gate to signature</Eyebrow>
        <h2
          className="text-3xl md:text-4xl font-extrabold text-slate-50 max-w-2xl"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          A visit becomes a signed report in four steps.
        </h2>
        <div className="mt-14 flex flex-col md:flex-row gap-10 md:gap-6">
          {STEPS.map((s, i) => (
            <WorkflowStep key={s.label} {...s} last={i === STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
