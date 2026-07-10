import { INK, BODY_FONT } from "./Landingtokens";
import LandingNavbar from "./Landingnavbar";
import HeroSection from "./Herosection";
import RolesSection from "./Rolessection";
import WorkflowSection from "./Workflowsection";
import TrustSection from "./Trustsection";
import CtaSection from "./Ctasection";
import LandingFooter from "./Landingfooter";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen text-slate-200 antialiased"
      style={{ background: INK, fontFamily: BODY_FONT }}
    >
    
      <LandingNavbar />
      <main>
        <HeroSection />
        <RolesSection />
        <WorkflowSection />
        <TrustSection />
        <CtaSection />
      </main>
      <LandingFooter />
    </div>
  );
}
