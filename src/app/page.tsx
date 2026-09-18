import { Hero } from "@/components/sections/Hero";
import { ChinaCooperation } from "@/components/sections/ChinaCooperation";
import { OurBrand } from "@/components/sections/OurBrand";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { WhyImperialCool } from "@/components/sections/WhyImperialCool";
import { GlobalReach } from "@/components/sections/GlobalReach";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChinaCooperation />
      <OurBrand />
      <ProductCategories />
      <WhyImperialCool />
      <GlobalReach />
      <ContactCTA />
    </>
  );
}
