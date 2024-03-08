import { Button, Card } from "react-bootstrap";
import style from "./../style/ctaBanner.module.css";
import { Link } from "react-router-dom";

const CtaBanner = () => {
  return (
    <Card className={`${style.ctaBanner} border-0 text-white`}>
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title className={`${style.cardTitleCtaBanner} text-center`}>
          Sewa Mobil di (Lokasimu) Sekarang
        </Card.Title>
        <Card.Text className={`${style.cardTextCtaBanner}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
        <Link to={`/search-cars`}>
          <Button
            className={`${style.buttonMulaiSewaMobil} border-0`}
            as="button"
          >
            Mulai Sewa Mobil
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CtaBanner;
