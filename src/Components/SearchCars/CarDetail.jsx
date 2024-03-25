import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "../../style/react-datepicker-style.css";
import { BsPeople } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import carImage from "../../assets/img/car-in-card.jpg";
import style from "../../style/carDetail.module.css";

const CarDetail = () => {
  const navigate = useNavigate();
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

  const redirectPage = () => {
    const currentUrl = window.location.href;
    localStorage.setItem("savedUrl", currentUrl);
    if (!localStorage.getItem("token")) {
      navigate("/sign-in");
    } else {
      navigate(`/payment-cars/${carItem.id}`);
    }
  };

  const [selectedDate, setSelectedDate] = useState([null, null]);
  const [startDate, endDate] = selectedDate;
  const [, setRange] = useState(0);

  const calculateRange = (start, end) => {
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const daysDifference = Math.floor((end - start) / millisecondsInADay) + 1;
    return daysDifference;
  };

  useEffect(() => {
    if (startDate && endDate) {
      const calculatedRange = calculateRange(startDate, endDate);
      setRange(calculatedRange);
      localStorage.setItem("rangeDate", calculatedRange);
    }
  }, [startDate, endDate]);

  const handleRange = (dates) => {
    setSelectedDate(dates);
    const [start] = dates;
    const maxRange = new Date(start);
    if (!start) return;
    maxRange.setDate(start.getDate() + 6);
    setMaxRange(maxRange);
  };

  const setMaxRange = (maxRange) => {
    setSelectedDate((prevDates) => {
      const [start, end] = prevDates;
      if (end > maxRange) {
        return [start, maxRange];
      }
      return prevDates;
    });
  };

  const filterDate = (date) => {
    const [startDate] = selectedDate;
    if (startDate) {
      const filterRange = new Date(startDate);
      filterRange.setDate(filterRange.getDate() + 6);
      return startDate <= date && date <= filterRange;
    }
    return true;
  };

  useEffect(() => {
    localStorage.setItem("startDate", JSON.stringify(startDate));
  }, [startDate]);
  useEffect(() => {
    localStorage.setItem("endDate", JSON.stringify(endDate));
  }, [endDate]);

  useEffect(() => {
    getDetailCar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

          <Col style={{ fontWeight: "400" }}>
            <DatePicker
              className={style.cardCarDate}
              placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
              selectsRange
              startDate={selectedDate[0]}
              endDate={selectedDate[1]}
              minDate={new Date()}
              maxDate={selectedDate[1] ? selectedDate[1] : null}
              value={selectedDate}
              dateFormat="dd MMM yyyy"
              onChange={handleRange}
              filterDate={filterDate}
              isClearable
              showMonthDropdown
            />
          </Col>

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
            <Card.Text>
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(carItem.price)}
            </Card.Text>
          </Col>
          <Col>
            <Button className={style.cardCarButton} onClick={redirectPage}>
              Lanjutkan Pembayaran
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CarDetail;
