import MyCarousel from "../Components/Carousel";
import CtaBanner from "../Components/CtaBanner";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import OurService from "../Components/OurService";
import WhyUs from "../Components/WhyUs";

export default function LandingPage() {
  return (
    <>
      <Header />
      <OurService />
      <WhyUs />
      {/* <TestimonialTwo /> */}
      <MyCarousel />
      <CtaBanner />
      <Faq />
      <Footer />
    </>
  );
}
