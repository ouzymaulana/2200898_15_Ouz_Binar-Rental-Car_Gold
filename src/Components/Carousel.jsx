import { Card, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonCarousel";
import "./../style/testimonial.css";
import menTestimonial from "../assets/img/testimonial_photo1.png";
import womenTestimonial from "../assets/img/testimonial_photo2.png";
import start from "../assets/img/Star 5.svg";

const MyCarousel = () => {
  const data = [
    {
      image: menTestimonial,
      message: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod”`,
    },
    {
      image: womenTestimonial,
      message: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod”`,
    },
    {
      image: menTestimonial,
      message: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod”`,
    },
    {
      image: womenTestimonial,
      message: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod”`,
    },
  ];

  return (
    <div>
      <Carousel
        renderButtonGroupOutside
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode
        className="custom-carousel"
        focusOnSelect={false}
        infinite
        // itemClass="carousel-item-padding-100-px"
        itemClass=""
        pauseOnHover
        customButtonGroup={<ButtonGroup />}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        slidesToSlide={1}
      >
        {data.map((item, i) => (
          <Card
            key={i}
            className="tertimonial-card-item d-flex align-items-center"
          >
            <img src={item.image} width={80} height={80} alt="testimonial" />
            <Col className="message-testimonial d-flex flex-column gap-2">
              <Col className="star d-flex">
                <img src={start} width={16} height={16} alt="start" />
                <img src={start} width={16} height={16} alt="start" />
                <img src={start} width={16} height={16} alt="start" />
                <img src={start} width={16} height={16} alt="start" />
                <img src={start} width={16} height={16} alt="start" />
              </Col>
              <p>{item.message}</p>
              <p>John Dee 32, Bromo</p>
            </Col>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
