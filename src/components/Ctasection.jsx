import { ArrowRight } from "lucide-react";
import { STEEL, LINE, FOG, DISPLAY_FONT } from "../utils/Landingtokens";
import { GoldButton } from "../utils/Landingprimitives";

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="py-24"
      style={{ background: STEEL, borderTop: `1px solid ${LINE}` }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-slate-50"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          Put your next inspection on the record.
        </h2>
        <p className="mt-5 text-base leading-relaxed" style={{ color: FOG }}>
          Book a 20-minute walkthrough with real project data — we'll show the
          admin, insurer, and engineer views side by side.
        </p>
        <div className="mt-9 flex justify-center">
          <GoldButton href="#" className="px-8 py-3.5">
            Request a demo <ArrowRight size={16} />
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
