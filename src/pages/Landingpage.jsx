import { INK, BODY_FONT } from "../utils/Landingtokens";
import LandingNavbar from "../layout/Landingnavbar";
import HeroSection from "../components/Herosection";
import RolesSection from "../components/Rolessection";
import WorkflowSection from "../components/Workflowsection";
import TrustSection from "../components/Trustsection";
import CtaSection from "../components/Ctasection";
import LandingFooter from "../layout/Landingfooter";

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
