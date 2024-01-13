import { Button, Card, Col } from "react-bootstrap";
import car from "../../assets/img/car-in-card.jpg";
import "../../style/cards.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function CarsCard({ carData }) {
  return (
    <Card style={{ width: "18rem" }} className="car-card">
      <Card.Img variant="top" src={carData.image || car} height={184} />
      <Card.Body>
        <Card.Text>{carData.name}</Card.Text>
        <Card.Title>Rp {carData.price} / hari</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
        {/* <Button className="w-100">
          <Link to={`/search-cars/detail/${carData.id}`}>Pilih Mobil</Link>
        </Button> */}
        <Link to={`/search-cars/detail/${carData.id}`}>
          <Card.Link className="w-100" as="button">
            Pilih Mobil
          </Card.Link>
        </Link>
      </Card.Body>
    </Card>
  );
}
