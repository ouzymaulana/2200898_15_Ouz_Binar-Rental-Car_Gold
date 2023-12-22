import { Button, Card } from "react-bootstrap";
import "./../style/ctaBanner.css";

const CtaBanner = () => {
  return (
    // <Row className="cta-banner flex-column justify-content-center align-items-center text-white">
    //   <Col className="title">
    //     <p>Sewa Mobil di (Lokasimu) Sekarang</p>
    //   </Col>
    //   <Col className="description">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae
    //     recusandae impedit non sunt unde fugiat ab, voluptates dolor maiores
    //     excepturi minima nulla quisquam! Aliquid enim error sapiente odit eum.
    //   </Col>
    //   <Button>Mulai Sewa Mobil</Button>
    // </Row>
    <Card className="cta-banner justify-content-center align-items-center">
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CtaBanner;
