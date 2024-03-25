import { Card } from "react-bootstrap";
import car from "../../assets/img/car-in-card.jpg";
import style from "../../style/cards.module.css";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const CarsCard = ({ carData }) => {
  return (
    <Card style={{ width: "18rem" }} className={style.carCard}>
      <Card.Img
        variant="top"
        src={carData.image || car}
        height={184}
        alt={carData.name}
      />
      <Card.Body className={style.cardBody}>
        <Card.Text>{carData.name}</Card.Text>
        <Card.Title className={style.cardTitle}>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(carData.price)}{" "}
          / hari
        </Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
        <Link to={`/search-cars/detail/${carData.id}`}>
          <Card.Link className="w-100" as="button">
            Pilih Mobil
          </Card.Link>
        </Link>
      </Card.Body>
    </Card>
  );
};

CarsCard.propTypes = {
  carData: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default CarsCard;
