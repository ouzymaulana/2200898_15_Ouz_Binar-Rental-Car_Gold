import { Button, Row } from "react-bootstrap";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import "../style/testimonial.css";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  // const {
  //   carouselState: { currentSlide },
  // } = rest;
  return (
    <Row className="carousel-button-group flex-row justify-content-center gap-4 mt-4 w-100">
      <Button
        className="carousel-button position-relative"
        // variant="outline"
        variant="outline-success"
        // className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      >
        <span className="position-absolute icon-carousel">
          <IoChevronBackOutline />
        </span>
      </Button>
      <Button
        className="carousel-button position-relative"
        variant="outline-success"
        onClick={() => next()}
      >
        <span className="position-absolute icon-carousel">
          <IoChevronForward />
        </span>
      </Button>
    </Row>
  );
};

export default ButtonGroup;
