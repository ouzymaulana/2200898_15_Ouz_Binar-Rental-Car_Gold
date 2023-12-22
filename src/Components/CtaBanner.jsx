import { Button, Card } from "react-bootstrap";
import "./../style/ctaBanner.css";

const CtaBanner = () => {
  return (
    <Card className="cta-banner border-0 text-white">
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title className="card-title-cta-banner text-center">
          Sewa Mobil di (Lokasimu) Sekarang
        </Card.Title>
        <Card.Text className="card-text-cta-banner">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
        <Button className="button-mulai-sewa-mobil border-0">
          Mulai Sewa mobil
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CtaBanner;
