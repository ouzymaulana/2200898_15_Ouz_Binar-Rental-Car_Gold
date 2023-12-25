import CtaBanner from "../Components/CtaBanner";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import OurService from "../Components/OurService";
import Testimonial from "../Components/Testimonial";
import WhyUs from "../Components/WhyUs";

export default function LandingPage() {
  return (
    <>
      <Header />
      <OurService />
      <WhyUs />
      <Testimonial />
      <CtaBanner />
      <Faq />
      <Footer />
    </>
  );
}
