import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "./../style/testimonial.css";

const Testimonial = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider
        style={{ display: "flex", flexDirection: "row", overflow: "hidden" }}
      >
        <Slide
          index={0}
          className="slide-item"
          style={{ backgroundColor: "red" }}
        >
          I am the first Slide.
        </Slide>
        <Slide
          index={1}
          className="slide-item"
          style={{ backgroundColor: "blue" }}
        >
          I am the second Slide.
        </Slide>
        <Slide
          index={2}
          className="slide-item"
          style={{ backgroundColor: "purple" }}
        >
          I am the third Slide.
        </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default Testimonial;
