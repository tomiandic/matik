import Footer from "@/components/Footer";
import BentoBox from "./BentoBox";
import Landing from "./LandingSection";
import FormContainer from "./FormSection";

export default function Home() {
  return (
    <div className="w-full overflow-hidden -mt-16">
      <Landing />
      <div className="items-center justify-items-center overflow-hidden py-10">
        <BentoBox />
      </div>
      <FormContainer />
      <Footer />
    </div>
  );
}
