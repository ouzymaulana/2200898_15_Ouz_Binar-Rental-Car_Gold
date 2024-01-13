import { Card, Col } from "react-bootstrap";
import Slider from "react-slick";
import "./../style/testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";

export default function TestimonialTwo() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    // paddingLeft: "20px",
    // swipeToSlide: true,
    slidesToScroll: 2,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <div>
      <Col className="testimonial-title d-flex flex-column align-items-center">
        <p>Testimonial</p>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </Col>
      <Slider ref={sliderRef} {...settings}>
        <Card className="tertimonial-card-item">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="tertimonial-card-item">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="tertimonial-card-item">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button
          className="button"
          style={{ borderRadius: "50px" }}
          onClick={previous}
        >
          <IoChevronBackOutline />
        </button>
        <button
          className="button"
          style={{ borderRadius: "50px" }}
          onClick={next}
        >
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
}
