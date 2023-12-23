import { Button, Col, Nav, Navbar, Offcanvas } from "react-bootstrap";
import car from "./../assets/img/img_car.png";
import "./../style/Header.css";

const Header = () => {
  return (
    <>
      <Navbar expand={"lg"} className="navbar fixed-top">
        <Navbar.Brand className="icon-app" href="#" />
        <Navbar.Toggle aria-controls={`navbarOffcanvasLg`} />
        <Navbar.Offcanvas
          id={`navbarOffcanvasLg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              BCR
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#" className="active">
                Our Services
              </Nav.Link>
              <Nav.Link href="#" className="active">
                Why Us
              </Nav.Link>
              <Nav.Link href="#" className="active">
                Testimonial
              </Nav.Link>
              <Nav.Link href="#" className="active">
                FAQ
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
      <div className="heroSection flex-wrap">
        <Col className="titleHeroSection fw-bold">
          <h1 className="fw-bold lh-base">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <Button
            type="button"
            className="borrow fw-bold btn text-white border-0"
          >
            Mulai Sewa Mobil
          </Button>
        </Col>
        <Col className="carImage">
          <img src={car} alt="car" />
        </Col>
      </div>
    </>
  );
};

export default Header;
