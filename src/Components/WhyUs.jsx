import { Card, Col } from "react-bootstrap";
import "./../style/whyUs.css";
import iconComplete from "./../assets/img/icon_complete.png";
import iconPrice from "./../assets/img/icon_price.png";
import icon24Hrs from "./../assets/img/icon_24hrs.png";
import iconProfessional from "./../assets/img/icon_professional.png";

const WhyUs = () => {
  return (
    <div className="why-us">
      <Col className="why-us-title">
        <p>Why Us?</p>
        <p>Mengapa Harus Pilih Binar Car Rental?</p>
      </Col>
      <Col className="d-flex flex-wrap justify-content-between gap-3">
        <Card className="why-us-card d-flex flex-column gap-3">
          <Card.Img src={iconComplete} alt="icon_complete" />
          <Card.Title className="mb-2">Mobil Lengkap</Card.Title>
          <Card.Text>
            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
            terawat
          </Card.Text>
        </Card>
        <Card className="why-us-card d-flex flex-column gap-3">
          <Card.Img src={iconPrice} alt="icon_price" />
          <Card.Title className="mb-2">Harga Terjangkau</Card.Title>
          <Card.Text>
            Harga sewa mobil yang kompetitif dan terjangkau untuk berbagai
            kebutuhan
          </Card.Text>
        </Card>

        <Card className="why-us-card d-flex flex-column gap-3">
          <Card.Img src={icon24Hrs} alt="icon_24hrs" />
          <Card.Title className="mb-2">24 Jam Layanan</Card.Title>
          <Card.Text>
            Layanan pelanggan 24 jam siap membantu Anda kapan saja
          </Card.Text>
        </Card>
        <Card className="why-us-card d-flex flex-column gap-3">
          <Card.Img src={iconProfessional} alt="icon_professional" />
          <Card.Title className="mb-2">Pelayanan Profesional</Card.Title>
          <Card.Text>
            Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
            waktu
          </Card.Text>
        </Card>
      </Col>
    </div>
  );
};

export default WhyUs;
