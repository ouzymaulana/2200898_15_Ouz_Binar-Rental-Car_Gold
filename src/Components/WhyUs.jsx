import { Card, Col } from "react-bootstrap";
import "./../style/whyUs.css";
import iconComplete from "./../assets/img/icon_complete.png";
import iconPrice from "./../assets/img/icon_price.png";
import icon24Hrs from "./../assets/img/icon_24hrs.png";
import iconProfessional from "./../assets/img/icon_professional.png";

const WhyUs = () => {
  const data = [
    {
      icon: iconComplete,
      title: "Mobil Lengkap",
      description:
        "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      icon: iconPrice,
      title: "harga Terjangkau",
      description:
        "Harga sewa mobil yang kompetitif dan terjangkau untuk berbagai kebutuhan",
    },
    {
      icon: icon24Hrs,
      title: "24 Jam Layanan",
      description: "Layanan pelanggan 24 jam siap membantu Anda kapan saja",
    },
    {
      icon: iconProfessional,
      title: "Pelayanan Profesional",
      description:
        "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    },
  ];

  return (
    <div className="why-us">
      <Col className="why-us-title">
        <p>Why Us?</p>
        <p>Mengapa Harus Pilih Binar Car Rental?</p>
      </Col>
      <Col className="d-flex flex-wrap justify-content-between gap-3">
        {data.map((item, i) => (
          <Card className="why-us-card d-flex flex-column gap-3" key={i}>
            <Card.Img src={item.icon} alt="icon_complete" />
            <Card.Title className="mb-2">{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card>
        ))}
      </Col>
    </div>
  );
};

export default WhyUs;
