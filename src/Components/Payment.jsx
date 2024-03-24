import { Card, Col, Button, Tab, Tabs } from "react-bootstrap";
import style from "./../style/Payment.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import moment from "moment";
import copy from "copy-to-clipboard";
import iconCheck from "./../assets/icon/fi_check.png";
import iconCopy from "./../assets/icon/fi_copy.png";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleButton = (buttonPayment) => {
    setActive(active === buttonPayment ? "" : buttonPayment);
    setCheckBCA(buttonPayment === "BCA" && !checkBCA);
    setCheckBNI(buttonPayment === "BNI" && !checkBNI);
    setCheckMandiri(buttonPayment === "Mandiri" && !checkMandiri);
  };

  const textRef1 = useRef();
  const textRef2 = useRef();
  const copyToClipboard = (textRef) => {
    let copyText = textRef.current.value;
    copy(copyText);
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
            <div className={style.cardsLabelTitle}>
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
                  <Col className={style.bankText}>
                    <button
                      className={`${style.bankButton} ${
                        active === "BCA" ? "active" : ""
                      }`}
                      onClick={() => handleButton("BCA")}
                    >
                      BCA
                    </button>
                    <div style={{ margin: "6px 0" }}>BCA Transfer</div>
                    {active === "BCA" && checkBCA && (
                      <img src={iconCheck} alt="Check Icon" />
                    )}
                  </Col>

                  <hr style={{ margin: "16px 0px" }} />

                  <Col className={style.bankText}>
                    <button
                      className={`${style.bankButton} ${
                        active === "BNI" ? "active" : ""
                      }`}
                      onClick={() => handleButton("BNI")}
                    >
                      BNI
                    </button>
                    <div style={{ margin: "6px 0" }}>BNI Transfer</div>
                    {active === "BNI" && checkBNI && (
                      <img src={iconCheck} alt="Check Icon" />
                    )}
                  </Col>

                  <hr style={{ margin: "16px 0px" }} />

                  <Col className={style.bankText}>
                    <button
                      className={`${style.bankButton} ${
                        active === "Mandiri" ? "active" : ""
                      }`}
                      onClick={() => handleButton("Mandiri")}
                    >
                      Mandiri
                    </button>
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
                  className={` d-flex flex-row justify-content-between`}
                  style={{ marginBottom: "8px" }}
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
                  className={`d-flex flex-row justify-content-between`}
                  style={{ marginBottom: "8px" }}
                >
                  <li>Pajak</li>
                  <div style={{ color: "#5CB85F" }}>Termasuk</div>
                </div>
                <div
                  className={`d-flex flex-row justify-content-between`}
                  style={{ marginBottom: "8px" }}
                >
                  <li>Biaya makan sopir</li>
                  <div style={{ color: "#5CB85F" }}>Termasuk</div>
                </div>
              </Col>

              <div className={style.cardsTitle}>Belum termasuk</div>
              <li style={{ marginBottom: "8px" }}>Bensin</li>
              <li style={{ marginBottom: "8px" }}>Tol dan parkir</li>

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
                className={`${style.cardsButton} w-100`}
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
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "baseline",
                    }}
                  >
                    <button
                      className={style.bankButton}
                      style={{ height: "30px", margin: "1px" }}
                    >
                      .....
                    </button>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: "16px",
                      }}
                    >
                      <div className={style.paymentTitle}>.....</div>
                      <div className={style.paymentTitle}>
                        a.n Binar Car Rental
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={style.paymentText}>Nomor Rekening</div>
                    <div className={style.paymentContainer}>
                      <input
                        className={style.paymentInput}
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          lineHeight: "18px",
                        }}
                        type="text"
                        ref={textRef1}
                      />
                      <button
                        className={style.copyButton}
                        onClick={() => copyToClipboard(textRef1)}
                      >
                        <img src={iconCopy} />
                      </button>
                    </div>

                    <div className={style.paymentText}>Total Bayar</div>
                    <div className={style.paymentContainer}>
                      <input
                        className={style.paymentInput}
                        style={{
                          fontWeight: "700",
                          fontSize: "12px",
                          lineHeight: "18px",
                        }}
                        type="text"
                        ref={textRef2}
                      />
                      <button
                        className={style.copyButton}
                        onClick={() => copyToClipboard(textRef2)}
                      >
                        <img src={iconCopy} />
                      </button>
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
                  </div>{" "}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Col style={{ display: "flex", flexDirection: "column" }}>
                    <Tabs className={`active ${style.tabsTitle}`} justify>
                      <Tab
                        className={style.tabsTitle}
                        eventKey="ATM BCA"
                        title="ATM BCA"
                      >
                        <ul className={style.tabsText}>
                          <li>Masukkan kartu ATM dan PIN BCA kamu. </li>
                          <li>
                            Pada menu utama, pilih menu ” Transaksi lainnya “
                          </li>
                          <li>Pilih menu</li>
                          “Transfer” dan kemudian pilih “BCA Virtual Account“
                          <li>
                            Masukkan no. BCA Virtual Account & klik “Lanjutkan“
                          </li>
                          <li>
                            Periksa kembali rincian pembayaran kamu, lalu pilih
                            Ya
                          </li>
                        </ul>
                      </Tab>

                      <Tab
                        className={style.tabsTitle}
                        eventKey="M-BCA"
                        title="M-BCA"
                      >
                        <ul className={style.tabsText}>
                          <li>Lakukan log in pada aplikasi BCA mobile.</li>
                          <li>Pilih “m-BCA” masukan kode akses m-BCA.</li>
                          <li>
                            Pilih “m-Transfer“, lalu pilih “BCA Virtual Account“
                          </li>
                          <li>
                            Masukkan nomor BCA Virtual Account dan klik “OK“
                          </li>
                          <li>
                            Konfirmasi no virtual account dan rekening
                            pendebetan
                          </li>
                          <li>
                            Periksa kembalian rincian pembayaran kamu, lalu klik
                            “Ya”
                          </li>
                          <li>Masukan pin m-BCA untuk verifikasi</li>
                        </ul>
                      </Tab>

                      <Tab
                        className={style.tabsTitle}
                        eventKey="BCA Klik"
                        title="BCA Klik"
                      >
                        <ul className={style.tabsText}>
                          <li>
                            Login pada aplikasi KlikBCA, masukkan user ID & PIN
                          </li>
                          <li>
                            Pilih “Transfer Dana“, kemudian pilih “Transfer ke
                            BCA Virtual Account“
                          </li>
                          <li>
                            Masukkan no. BCA Virtual Account & klik “Lanjutkan“
                          </li>
                          <li>
                            Pastikan data yang dimasukkan sudah benar, dan Input
                            “Respon KeyBCA“, lalu klik “Kirim“
                          </li>
                        </ul>
                      </Tab>
                    </Tabs>

                    <Tabs defaultActiveKey="ATM BNI" justify>
                      <Tab eventKey="ATM BNI" title="ATM BNI">
                        <ul>
                          <li>Masukkan kartu ATM dan PIN BNI kamu</li>
                          <li>
                            Pada menu utama, pilih menu “Menu Lainnya” &gt;
                            “Transfer” &gt; “Rekening Tabungan” &gt; ke
                            “Rekening BNI”
                          </li>
                          <li>Masukkan nomor Virtual Account</li>
                          <li>Masukkan jumlah pembayaran sesuai tagihan</li>
                          <li>
                            Di halaman konfirmasi, pastikan data transaksi sudah
                            benar kemudian pilih “Ya“
                          </li>
                        </ul>
                      </Tab>
                      <Tab
                        eventKey="Mobile Banking BNI"
                        title="Mobile Banking BNI"
                      >
                        <ul>
                          <li> Akses BNI Mobile Banking melalui handphone.</li>
                          <li>Masukkan User ID dan Password</li>
                          <li>
                            Pilih menu “Transfer“, lalu pilih “Antar Rekening
                            BNI“, pilih “Input Rekening Baru”
                          </li>
                          <li>
                            Masukkan nomor Virtual Account lalu masukkan jumlah
                            pembayaran
                          </li>
                          <li>
                            Pastikan data transaksi sudah benar kemudian pilih
                            “Ya“
                          </li>
                          <li>Masukkan password untuk verifikasi</li>
                        </ul>
                      </Tab>
                      <Tab
                        eventKey="Internet Banking BNI"
                        title="Internet Banking BNI"
                      >
                        <ul>
                          <li>
                            Masuk ke https://ibank.bni.co.id, masukkan User ID
                            dan Password
                          </li>
                          <li>
                            Pilih menu “Transfer“, lalu pilih “Tambah Rekening
                            Favorit“. Jika menggunakan Desktop. tambah rekening
                            pada menu “Transaksi” kemudian “Atur Rekening
                            Tujuan” lalu pilih “Tambah Rekening Tujuan”
                          </li>
                          <li>Masukkan nomor Virtual Account</li>
                          <li>
                            Masukkan Kode Otentikasi dan Nomor Rekening berhasil
                            ditambahkan
                          </li>
                          <li>
                            Pilih menu “Transfer“, lalu pilih “Transfer Antar
                            Rekening BNI“, pilih “Rekening Tujuan”
                          </li>
                          <li>
                            Pilih Rekening Debit, masukkan jumlah pembayaran
                            sesuai tagihan
                          </li>
                          <li>Masukkan Kode Otentikasi</li>
                        </ul>
                      </Tab>
                    </Tabs>

                    <Tabs defaultActiveKey="ATM Mandiri" justify>
                      <Tab eventKey="ATM Mandiri" title="ATM Mandiri">
                        <ul>
                          <li>Masukkan PIN ATM kamu</li>
                          <li>
                            Pada menu utama, pilih menu “Bayar/Beli” lalu pilih
                            menu “Multi Payment” (Jika di layar belum tersedia,
                            tekan menu “Lainnya” dan pilih “Multi Payment“)
                          </li>
                          <li>
                            Masukkan nomor 88871 pada kode perusahaan kemudian
                            tekan tombol “Benar“
                          </li>
                          <li>
                            Masukkan kode pembayaran (kode pembayaran Mandiri
                            billpayment kamu)
                          </li>
                          <li>
                            Periksa kembali data transaksimu dan selesaikan
                            proses pembayaran
                          </li>
                        </ul>
                      </Tab>
                      <Tab
                        eventKey="Mandiri Internet Banking"
                        title="Mandiri Internet Banking"
                      >
                        <ul>
                          <li>
                            Lakukan Login ke Internet Banking Mandiri kamu
                          </li>
                          <li>
                            Pada menu utama, pilih menu “Bayar” lalu pilih menu
                            “Multi Payment“
                          </li>
                          <li>
                            Pilih akun kamu di bagian Dari Rekening, kemudian di
                            Penyedia Jasa pilih “Blibli.com“
                          </li>
                          <li>
                            Masukkan kode pembayaran (kode pembayaran Mandiri
                            billpayment kamu), dan klik “Lanjutkan“
                          </li>
                          <li>
                            Periksa kembali nama perusahaan, nomor pesanan, dan
                            jumlah pembayaran kamu
                          </li>
                          <li>
                            Selesaikan pembayaran dengan menggunakan Token
                            Mandiri
                          </li>
                        </ul>
                      </Tab>
                      <Tab eventKey="Mandiri Online" title="Mandiri Online">
                        <ul>
                          <li>Lakukan Login ke Mandiri Online kamu</li>
                          <li>Pada menu utama, pilih menu “Bayar“</li>
                          <li>Lalu pilih menu “Multi Payment“</li>
                          <li>Pilih Penyedia Jasa “Blibli.com“</li>
                          <li>
                            Masukkan kode pembayaran [Kode pembayaran Mandiri
                            billpayment], dan klik “Lanjutkan“
                          </li>
                          <li>
                            Periksa kembali data transaksi kamu dan selesaikan
                            proses pembayaran
                          </li>
                        </ul>
                      </Tab>
                    </Tabs>
                  </Col>
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
            <Button className={`${style.cardsButton} w-100`}>
              Konfirmasi Pembayaran
            </Button>
          </Card.Body>
        </Col>
      </Card>
    </>
  );
};

export default Payment;
