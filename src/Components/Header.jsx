import { Button, Col, Nav, Navbar, Offcanvas } from "react-bootstrap";
import car from "./../assets/img/img_car.png";
import style from "./../style/Header.module.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar expand={"lg"} className={`${style.navbar} navbar fixed-top`}>
        <Navbar.Brand className={style.iconApp} href="#" />
        <Navbar.Toggle aria-controls={`navbarOffcanvasLg`} />
        <Navbar.Offcanvas
          id={style.navbarOffcanvasLg}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              className={style.offcanvasTitle}
              id={`offcanvasNavbarLabel-expand-lg`}
            >
              BCR
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={style.offcanvasBody}>
            <Nav className="justify-content-end flex-grow-1 align-items-center pe-3">
              <Nav.Link
                href="#ourService"
                className={`active ${style.navLink}`}
              >
                Our Services
              </Nav.Link>
              <Nav.Link href="#whyUs" className={`active ${style.navLink}`}>
                Why Us
              </Nav.Link>
              <Nav.Link
                href="#testimonial"
                className={`active ${style.navLink}`}
              >
                Testimonial
              </Nav.Link>
              <Nav.Link href="#faq" className={`active ${style.navLink}`}>
                FAQ
              </Nav.Link>
              <Nav.Link
                href="#"
                style={{
                  marginLeft: "16px",
                  padding: "8px 12px",
                  color: "#FFF",
                  backgroundColor: "#5CB85F",
                  borderRadius: "2px",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                Register
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
      <div className={`${style.heroSection} flex-wrap`}>
        <Col className={`${style.titleHeroSection} fw-bold`}>
          <h1 className="fw-bold lh-base">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          {pathname !== "/search-cars" && (
            <Link to={`/search-cars`}>
              <Button
                className={`${style.borrow} fw-bold btn text-white border-0`}
                as="button"
              >
                Mulai Sewa Mobil
              </Button>
            </Link>
          )}
        </Col>
        <Col className={style.carImage}>
          <img src={car} alt="car" />
        </Col>
      </div>
    </>
  );
};

export default Header;
