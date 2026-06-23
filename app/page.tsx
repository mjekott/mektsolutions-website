import { AmbientGlow } from "@/components/AmbientGlow";
// import { BackgroundMusic } from "@/components/BackgroundMusic";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { SelectedWorks } from "@/components/sections/SelectedWorks";
import { UiDesigns } from "@/components/sections/UiDesigns";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Founder } from "@/components/sections/Founder";
import { Diagnostics } from "@/components/sections/Diagnostics";
import { Cta } from "@/components/sections/Cta";
import { SiteFooter } from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    // overflow-x-clip (not hidden) clips the ambient glow without creating a
    // scroll container, which would break the galleries' sticky pinning.
    <div className="relative w-full overflow-x-clip bg-[#1b1a18] text-[#f4f4f3] tracking-[-0.01em]">
      <AmbientGlow />
      {/* <BackgroundMusic /> */}
      <Navbar />
      <Hero />
      <TrustedBy />
      <WhoWeAre />
      <SelectedWorks />
      <UiDesigns />
      <Services />
      <Industries />
      <Process />
      <Testimonials />
      <Founder />
      <Diagnostics />
      <Cta />
      <SiteFooter />
    </div>
  );
}
