import { Button, Card, Col } from "react-bootstrap";
import style from "../../style/carDetail.module.css";
import carImage from "../../assets/img/car-in-card.jpg";
import { BsPeople } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CarDetail = () => {
  const [carItem, setCarItem] = useState([]);
  const { id } = useParams();

  const getDetailCar = async () => {
    const axiosConfig = {
      headers: {
        accept: "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwMTg3MDQ2OH0.WmZUb7_Bv6ml3HG4AMTC61xRIEZA7hU0WXSLM5IKouc",
      },
    };
    try {
      const response = await axios.get(
        `https://api-car-rental.binaracademy.org/admin/car/${id}`,
        axiosConfig
      );

      if (response.status === 200) {
        setCarItem(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetailCar();
  }, []);

  return (
    <div className={style.carDetail}>
      <Card style={{ flex: 7 }}>
        <Card.Body style={{ padding: "24px" }}>
          <Card.Text className={style.listTitle}>Tentang Paket</Card.Text>
          <Col className="list-paket d-flex flex-column gap-3">
            <Col className={style.listItem}>
              <Card.Text className={style.listTitle}>Include</Card.Text>
              <ul className={style.listAboutPackage}>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </Col>
            <Col className={style.listItem}>
              <Card.Text className={style.listTitle}>Exclude</Card.Text>
              <ul className={style.listAboutPackage}>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </Col>
            <Col className={style.listItem}>
              <Card.Text className={style.listTitle}>
                Refund, Reschedule, Overtime
              </Card.Text>
              <ul className={style.listAboutPackage}>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </Col>
          </Col>
        </Card.Body>
      </Card>
      <Card className={style.cardCarDetail}>
        <Card.Img variant="top" src={carItem.image || carImage} />
        <Card.Body style={{ padding: "24px" }}>
          <Col className="d-flex flex-column mb-5">
            <Card.Text style={{ marginBottom: "0px" }}>
              {carItem.name}
            </Card.Text>
            <Col
              className="d-flex align-items-center gap-2"
              style={{ color: "#8A8A8A" }}
            >
              <BsPeople fontSize={16} /> 6 - 8 Orang
            </Col>
          </Col>
          <Col className="d-flex flex-row justify-content-between">
            <Card.Text>Total</Card.Text>
            <Card.Text>{carItem.price}</Card.Text>
          </Col>
          <Button className="w-100">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CarDetail;
