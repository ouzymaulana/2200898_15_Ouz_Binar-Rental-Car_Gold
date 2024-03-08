import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsPeople } from "react-icons/bs";
import { useParams } from "react-router-dom";
import carImage from "../../assets/img/car-in-card.jpg";
import style from "../../style/carDetail.module.css";

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedDate, setSelectedDate] = useState([null, null]);
  const [startDate, endDate] = selectedDate;

  const currentDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(currentDate.getDate() + 7);

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
          <Col className="d-flex flex-column">
            <Card.Text style={{ marginBottom: "8px" }}>
              {carItem.name}
            </Card.Text>
            <Col
              className="d-flex align-items-center gap-2"
              style={{
                color: "#8A8A8A",
                marginBottom: "18px",
                fontSize: "10px",
                lineHeight: "14px",
              }}
            >
              <BsPeople fontSize={14} /> 6 - 8 Orang
            </Col>
          </Col>
          <Col
            style={{
              marginBottom: "4px",
              color: "#8A8A8A",
              fontWeight: "300",
              fontSize: "12px",
              lineHeight: "18px",
            }}
          >
            Tentukan lama sewa mobil (max. 7 hari)
          </Col>

          <div style={{ fontWeight: "400" }}>
            <DatePicker
              className={style.cardCarDate}
              placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              minDate={currentDate}
              // maxDate={endDate}
              // maxDate={maxDate}
              dateFormat="dd MMM yyyy"
              onChange={(date) => setSelectedDate(date)}
              isClearable={true}
            />
          </div>

          <Col
            className="d-flex flex-row justify-content-between"
            style={{ marginTop: "24px" }}
          >
            <Card.Text
              style={{
                marginBottom: "24px",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "20px",
              }}
            >
              Total
            </Card.Text>
            <Card.Text>Rp {carItem.price}</Card.Text>
          </Col>
          <Link to={`/payment-cars/${carItem.id}`}>
            <Button className={style.cardCarButton}>Pilih Mobil</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CarDetail;
