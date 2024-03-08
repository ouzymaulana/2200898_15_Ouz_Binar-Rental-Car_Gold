import { Card, Col, Button } from "react-bootstrap";
import style from "./../style/Payment.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import iconCheck from "./../assets/icon/fi_check.png";

const ToggleGroup = () => {
  const payments = {
    data: [
      { id: "1", bank: "BNI" },
      { id: "2", bank: "BCA" },
      { id: "3", bank: "Mandiri" },
    ],
  };
  const [active, setActive] = useState(payments[0]);
  console.log(payments);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {payments.data.map((payment) => (
        <>
          <Button
            active={active === payment}
            onClick={() => setActive(payment)}
            className={style.cardsTextButton}
          >
            <div className={style.cardsText}>
              <div className={style.cardsTextContainer}>{payment.bank}</div>
              <div style={{ margin: "6px 0" }}>{payment.bank} Transfer</div>
              <img src={iconCheck} />
            </div>
          </Button>
          <hr style={{ margin: "16px 0px" }} />
        </>
      ))}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const GetFormattedTime = (milliseconds) => {
    let total_detik = parseInt(Math.floor(milliseconds / 1000));
    let total_menit = parseInt(Math.floor(total_detik / 60));
    let total_jam = parseInt(Math.floor(total_menit / 60));

    let detik = parseInt(total_detik % 60);
    let menit = parseInt(total_menit % 60);
    let jam = parseInt(total_jam % 24);

    return `${jam}: ${menit}: ${detik}`;
  };

  return <div>{GetFormattedTime(time)}</div>;
};

const Payment = () => {
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
    <>
      <Card>
        <Card.Body
          className={style.cardsContainer}
          style={{ margin: "0 199px 24px" }}
        >
          <Col className={style.cardsPayment}>
            <div className={style.cardsTitle}>Detail Pesananmu</div>
            <div className={style.cardsLabel}>
              <div className={style.cardsLabelContainer}>Nama/Tipe Mobil</div>
              <div className={style.cardsLabelContainer}>Kategori</div>
              <div className={style.cardsLabelContainer}>
                Tanggal Mulai Sewa
              </div>
              <div className={style.cardsLabelContainer}>
                Tanggal Akhir Sewa
              </div>
            </div>
            <div className={style.cardsLabelValue}>
              <div className={style.cardsLabelContainer}>{carItem.name}</div>
              <div className={style.cardsLabelContainer}>
                {carItem.category}
              </div>
              <div className={style.cardsLabelContainer}>{carItem.price}</div>
              <div className={style.cardsLabelContainer}>Tanggal akhir</div>
            </div>
          </Col>
        </Card.Body>

        <Col style={{ display: "flex", gap: "32px" }}>
          <Card.Body
            className={style.cardsContainer}
            style={{ marginLeft: "199px", width: "605px", height: "320px" }}
          >
            <Col className={style.cardsPayment}>
              <div
                className={style.cardsTitle}
                style={{ marginBottom: "16px" }}
              >
                Pilih Bank Transfer
              </div>
              <div style={{ marginBottom: "44px" }}>
                Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
                atau Mobile Banking
              </div>
              <ToggleGroup />
            </Col>
          </Card.Body>

          <Card.Body
            className={style.cardsContainer}
            style={{ marginRight: "199px", width: "405px" }}
          >
            <Col className={style.cardsPayment}>
              <div className={style.cardsTitle}>{carItem.name}</div>

              <Col
                className="d-flex flex-row justify-content-between"
                style={{ marginBottom: "18px" }}
              >
                <Card.Text className={style.cardsList}>Total</Card.Text>
                <Card.Text className={style.cardsTitle}>
                  Rp {carItem.price}
                </Card.Text>
              </Col>

              <Col>
                <div className={style.cardsTitle}>Harga</div>
                <li className={style.cardsDetailText}>
                  Sewa Mobil Rp. ...... x 7 Hari
                </li>
              </Col>

              <Col>
                <div className={style.cardsTitle}>Biaya Lainnya</div>
                <div
                  className={`${style.cardsDetailText} d-flex flex-row justify-content-between`}
                >
                  <li>Pajak</li>
                  <div style={{ color: "#5CB85F" }}>Termasuk</div>
                </div>
                <div
                  className={`${style.cardsDetailText} d-flex flex-row justify-content-between`}
                >
                  <li>Biaya makan sopir</li>
                  <div style={{ color: "#5CB85F" }}>Termasuk</div>
                </div>
              </Col>

              <div className={style.cardsTitle}>Belum termasuk</div>
              <li className={style.cardsDetailText}>Bensin</li>
              <li className={style.cardsDetailText}>Tol dan parkir</li>

              <hr style={{ marginTop: "24px", marginBottom: "16px" }} />

              <Col
                className={`${style.cardsTitle} d-flex flex-row justify-content-between`}
              >
                <Card.Text>Total</Card.Text>
                <Card.Text>Rp {carItem.price}</Card.Text>
              </Col>

              <Button className={`${style.cardsDetailButton} w-100`}>
                Bayar
              </Button>
            </Col>
          </Card.Body>
        </Col>

        <br></br>

        <Col style={{ display: "flex", gap: "32px" }}>
          <Card.Body
            className={style.cardsContainer}
            style={{ marginLeft: "199px", width: "605px", height: "96px" }}
          >
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                className={style.cardsPayment}
                style={{ width: "450px", marginRight: "20px" }}
              >
                <div
                  className={style.cardsTitle}
                  style={{ marginBottom: "14.45px" }}
                >
                  Selesaikan Pembayaran Sebelum
                </div>
                <div style={{ marginBottom: "17.05px" }}>
                  .., ......... jam 13.00 WIB
                </div>
              </div>
              <div className={style.cardsTimer}>
                <Timer duration={24 * 60 * 60 * 1000} />
              </div>
            </Col>
          </Card.Body>

          <Card.Body
            className={style.cardsContainer}
            style={{
              marginRight: "199px",
              width: "405px",
            }}
          >
            <div style={{ marginBottom: "44px" }}>
              Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
            </div>
            <Button className={`${style.cardsDetailButton} w-100`}>
              Konfirmasi Pembayaran
            </Button>
          </Card.Body>
        </Col>
      </Card>
    </>
  );
};

export default Payment;
