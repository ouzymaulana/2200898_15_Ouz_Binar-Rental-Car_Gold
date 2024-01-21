import { Col } from "react-bootstrap";
import imgService from "./../assets/img/img_service.png";
import listIcon from "./../assets/img/list.png";
import style from "../style/ourService.module.css";

const OurService = () => {
  return (
    <div className={`d-flex flex-wrap ${style.ourService}`} id="ourService">
      <Col className={style.imgOurService}>
        <img src={imgService} alt="img_service" />
      </Col>
      <Col className={style.descriptionOurService}>
        <h6>Best Car Rental for any kind of trip in (Lokasimu)!</h6>
        <div className="d-flex flex-column gap-3">
          <p>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <Col className="d-flex gap-3">
            <img src={listIcon} alt="list" height="24" width="24" />
            <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
          </Col>
          <Col className="d-flex gap-3">
            <img src={listIcon} alt="list" height="24" width="24" />
            <p className={style.listOurService}>
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </p>
          </Col>
          <Col className="d-flex gap-3">
            <img src={listIcon} alt="list" height="24" width="24" />
            <p className={style.listOurService}>
              Sewa Mobil Jangka Panjang Bulanan
            </p>
          </Col>
          <Col className="d-flex gap-3">
            <img src={listIcon} alt="list" height="24" width="24" />
            <p className={style.listOurService}>
              Gratis Antar - Jemput Mobil di Bandara
            </p>
          </Col>
          <Col className="d-flex gap-3">
            <img src={listIcon} alt="list" height="24" width="24" />
            <p className={style.listOurService}>
              Layanan Airport Transfer / Drop In Out
            </p>
          </Col>
        </div>
      </Col>
    </div>
  );
};

export default OurService;
