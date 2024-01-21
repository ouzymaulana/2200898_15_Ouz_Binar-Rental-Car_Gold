import { Col, Image } from "react-bootstrap";
import style from "../style/footer.module.css";
import facebook from "../assets/icon/icon_facebook.png";
import instagram from "../assets/icon/icon_instagram.png";
import email from "../assets/icon/icon_mail.png";
import twitch from "../assets/icon/icon_twitch.png";
import twitter from "../assets/icon/icon_twitter.png";

const Footer = () => {
  return (
    <div className={`${style.footer} d-flex`}>
      <Col className={`${style.footerSection} d-flex flex-column`}>
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </Col>
      <Col
        className={`${
          (style.navigation, style.footerSection)
        } d-flex flex-column`}
      >
        <p>Our Services</p>
        <p>Why Us</p>
        <p>Testimonial</p>
        <p>FAQ</p>
      </Col>
      <Col className={`${style.footerSection} d-flex flex-column`}>
        <p>Connection With Us</p>
        <div className={`${style.socialMedia} d-flex flex-row gap-3`}>
          <div>
            <Image src={facebook} alt="facebook" height={32} width={32} />
          </div>
          <div>
            <Image src={instagram} alt="instagram" height={32} width={32} />
          </div>
          <div>
            <Image src={twitter} alt="twitter" height={32} width={32} />
          </div>
          <div>
            <Image src={email} alt="email" height={32} width={32} />
          </div>
          <div>
            <Image src={twitch} alt="twitch" height={32} width={32} />
          </div>
        </div>
      </Col>
      <Col className={`${style.footerSection} d-flex flex-column`}>
        <p>Copyright Binar 2022</p>
        <div className={style.copyright}></div>
      </Col>
    </div>
  );
};

export default Footer;
