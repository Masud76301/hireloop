import Image from "next/image";
import HeroBanner from "./component/HeroBanner";
import PricingSection from "./component/PricingSection";
import JobSection from "./component/JobSection";
import FeaturesSection from "./component/FeaturesSection";

export default function Home() {
  return (
    <div className="">
      <HeroBanner></HeroBanner>
      <JobSection></JobSection>
      <FeaturesSection></FeaturesSection>
      <PricingSection></PricingSection>
     
    </div>
  );
}
