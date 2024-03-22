import { Card, Col, Button } from "react-bootstrap";
import style from "./../style/Payment.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import iconCheck from "./../assets/icon/fi_check.png";
import moment from "moment";

// eslint-disable-next-line react/prop-types
const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const GetFormattedTime = (milliseconds) => {
    const total_detik = parseInt(Math.floor(milliseconds / 1000));
    const total_menit = parseInt(Math.floor(total_detik / 60));
    const total_jam = parseInt(Math.floor(total_menit / 60));

    const detik = parseInt(total_detik % 60);
    const menit = parseInt(total_menit % 60);
    const jam = parseInt(total_jam % 24);

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

  const startDate = JSON.parse(localStorage.getItem("startDate"));
  const startdate = moment(startDate).format("DD MMM YYYY");
  const endDate = JSON.parse(localStorage.getItem("endDate"));
  const enddate = moment(endDate).format("DD MMM YYYY");
  const tomorrow = moment(enddate).add("1", "days").format("LLLL");
  const rangeDate = localStorage.getItem("rangeDate");

  const [checkBCA, setCheckBCA] = useState(false);
  const [checkBNI, setCheckBNI] = useState(false);
  const [checkMandiri, setCheckMandiri] = useState(false);
  const [active, setActive] = useState([]);
  console.log(active);

  const handleButton = (buttonPayment) => {
    setActive(active === buttonPayment ? "" : buttonPayment);
    setCheckBCA(buttonPayment === "BCA" && !checkBCA);
    setCheckBNI(buttonPayment === "BNI" && !checkBNI);
    setCheckMandiri(buttonPayment === "Mandiri" && !checkMandiri);
  };

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
              <div className={style.cardsLabelContainer}>{startdate}</div>
              <div className={style.cardsLabelContainer}>{enddate}</div>
            </div>
          </Col>
        </Card.Body>

        <Col style={{ display: "flex", gap: "32px" }}>
          <Col>
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
                  Kamu bisa membayar dengan transfer melalui ATM, Internet
                  Banking atau Mobile Banking
                </div>
                <Col>
                  <Col className={style.cardsText}>
                    <Button
                      className={`${style.cardsTextButton} ${
                        active === "BCA" ? "active" : ""
                      }`}
                      onClick={() => handleButton("BCA")}
                    >
                      BCA
                    </Button>
                    <div style={{ margin: "6px 0" }}>BCA Transfer</div>
                    {active === "BCA" && checkBCA && (
                      <img src={iconCheck} alt="Check Icon" />
                    )}
                  </Col>

                  <hr style={{ margin: "16px 0px" }} />

                  <Col className={style.cardsText}>
                    <Button
                      className={`${style.cardsTextButton} ${
                        active === "BNI" ? "active" : ""
                      }`}
                      onClick={() => handleButton("BNI")}
                    >
                      BNI
                    </Button>
                    <div style={{ margin: "6px 0" }}>BNI Transfer</div>
                    {active === "BNI" && checkBNI && (
                      <img src={iconCheck} alt="Check Icon" />
                    )}
                  </Col>

                  <hr style={{ margin: "16px 0px" }} />

                  <Col className={style.cardsText}>
                    <Button
                      className={`${style.cardsTextButton} ${
                        active === "Mandiri" ? "active" : ""
                      }`}
                      onClick={() => handleButton("Mandiri")}
                    >
                      Mandiri
                    </Button>
                    <div style={{ margin: "6px 0" }}>Mandiri Transfer</div>
                    {active === "Mandiri" && checkMandiri && (
                      <img src={iconCheck} alt="Check Icon" />
                    )}
                  </Col>

                  <hr style={{ margin: "16px 0px" }} />
                </Col>
              </Col>
            </Card.Body>
          </Col>

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
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(carItem.price * rangeDate)}
                </Card.Text>
              </Col>

              <Col>
                <div className={style.cardsTitle}>Harga</div>
                <div
                  className={`${style.cardsDetailText} d-flex flex-row justify-content-between`}
                >
                  <li>
                    Sewa Mobil{" "}
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(carItem.price)}{" "}
                    x {rangeDate} Hari
                  </li>
                  <div>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(carItem.price * rangeDate)}
                  </div>
                </div>
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
                <Card.Text>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(carItem.price * rangeDate)}
                </Card.Text>
              </Col>

              <Button
                disabled={
                  active !== "BCA" && active !== "BNI" && active !== "Mandiri"
                }
                className={`${style.cardsDetailButton} w-100`}
              >
                Bayar
              </Button>
            </Col>
          </Card.Body>
        </Col>

        <br></br>

        <Col style={{ display: "flex", gap: "32px" }}>
          <Col style={{ display: "flex", flexDirection: "column" }}>
            <Card.Body
              className={style.cardsContainer}
              style={{
                marginLeft: "199px",
                marginBottom: "24px",
                width: "605px",
                height: "96px",
              }}
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
                  <div style={{ marginBottom: "17.05px" }}>{tomorrow}</div>
                </div>
                <div className={style.cardsTimer}>
                  <Timer duration={24 * 60 * 60 * 1000} />
                </div>
              </Col>
            </Card.Body>

            <Card.Body
              className={style.cardsContainer}
              style={{
                marginLeft: "199px",
                marginBottom: "24px",
                width: "605px",
                height: "278px",
              }}
            >
              <Col>
                <div
                  className={style.cardsPayment}
                  style={{ marginBottom: "16px" }}
                >
                  <div className={style.cardsTitle}>Lakukan Transfer Ke</div>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <div>BCA</div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>BCA Transfer</div>
                      <div>a.n Binar Car Rental</div>
                    </div>
                  </div>
                </div>
              </Col>
            </Card.Body>

            <Card.Body
              className={style.cardsContainer}
              style={{
                marginLeft: "199px",
                marginBottom: "24px",
                width: "605px",
                height: "370px",
              }}
            >
              <Col>
                <div className={style.cardsPayment}>
                  <div
                    className={style.cardsTitle}
                    style={{ marginBottom: "24px" }}
                  >
                    Instruksi Pembayaran
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <div>ATM BCA</div>
                    <div>M-BCA</div>
                    <div>BCA Klik</div>
                    <div>Internet Banking</div>
                  </div>
                </div>
              </Col>
            </Card.Body>
          </Col>

          <Card.Body
            className={style.cardsContainer}
            style={{
              marginRight: "199px",
              width: "405px",
              height: "148px",
            }}
          >
            <div
              className={style.cardsPayment}
              style={{ marginBottom: "44px" }}
            >
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
