import { ArrowRight } from "lucide-react";
import InspectionTower from "./Inspectiontower";
import { GOLD, LINE, FOG, DISPLAY_FONT } from "./Landingtokens";
import { Eyebrow, GoldButton, GhostButton } from "./Landingprimitives";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <Eyebrow>Site inspection, insured</Eyebrow>
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-[1.08] text-slate-50"
            style={{ fontFamily: DISPLAY_FONT }}
          >
            Every visit on record.
            <br />
            Every risk in view.
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-md" style={{ color: FOG }}>
            Hitari connects insurers, project admins, and site engineers on one
            platform — scheduled visits, photo evidence, signed reports, and a
            live risk picture for every project you cover.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <GoldButton href="#cta" className="px-6 py-3">
              Request a demo <ArrowRight size={16} />
            </GoldButton>
            <GhostButton href="#workflow" className="px-6 py-3">
              See the workflow
            </GhostButton>
          </div>
          <p className="mt-8 text-xs" style={{ color: FOG }}>
            Built for construction-risk teams · Role-based access · Audit-ready exports
          </p>
        </div>

        {/* 3D canvas */}
        <div
          className="relative h-[380px] md:h-[480px] rounded-lg overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 50% 40%, #131A24 0%, #0B0E13 70%)",
            border: `1px solid ${LINE}`,
          }}
        >
          <InspectionTower />
          <div
            className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium"
            style={{
              background: "rgba(11,14,19,0.75)",
              border: "1px solid rgba(204,160,48,0.4)",
              color: GOLD,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GOLD }} />
            Inspection sweep · live
          </div>
        </div>
      </div>
    </section>
  );
}
