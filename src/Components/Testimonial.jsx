import { Col } from "react-bootstrap";
import Slider from "react-slick";
import style from "./../style/testimonial.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import menTestimonial from "../assets/img/testimonial_photo1.png";
import womenTestimonial from "../assets/img/testimonial_photo2.png";
import start from "../assets/img/Star 5.svg";

const Testimonial = () => {
  const sliderRef = useRef(null);

  const data = [
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

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full" id="testimonial">
      <Col
        className={`${style.testimonialTitle} d-flex flex-column align-items-center`}
      >
        <p>Testimonial</p>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </Col>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, i) => (
          <div key={i} className={style.tertimonialCardItem}>
            <div
              className={`${style.tertimonialCardBody} d-flex align-items-center`}
            >
              <img src={item.image} width={60} height={60} alt="testimonial" />
              <Col
                className={`${style.messageTestimonial} d-flex flex-column gap-2`}
              >
                <div className={`${style.star} d-flex`}>
                  <img src={start} width={16} height={16} alt="start" />
                  <img src={start} width={16} height={16} alt="start" />
                  <img src={start} width={16} height={16} alt="start" />
                  <img src={start} width={16} height={16} alt="start" />
                  <img src={start} width={16} height={16} alt="start" />
                </div>
                <p>{item.message}</p>
                <p>John Dee 32, Bromo</p>
              </Col>
            </div>
          </div>
        ))}
      </Slider>
      <div
        className="d-flex gap-3 justify-content-center"
        style={{ textAlign: "center", marginTop: "12px" }}
      >
        <span
          className={`${style.carouselButton} d-flex justify-content-center align-items-center`}
          onClick={previous}
        >
          <IoChevronBackOutline className={style.carouselIconButton} />
        </span>
        <span
          className={`${style.carouselButton} d-flex justify-content-center align-items-center`}
          onClick={next}
        >
          <IoChevronForward className={style.carouselIconButton} />
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
