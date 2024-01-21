import { Accordion, Col } from "react-bootstrap";
import style from "./../style/faq.module.css";

const Faq = () => {
  return (
    <div className={`${style.faq} d-flex`} id="faq">
      <Col className={style.faqTitle}>
        <p>Frequently Asked Question</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </Col>
      <Col className="d-flex flex-column gap-3">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header className={style.selectForm}>
              <span className={style.accordionTitle}>
                Apa saja syarat yang dibutuhkan?
              </span>
            </Accordion.Header>
            <Accordion.Body>One</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header className={style.selectForm}>
              <span className={style.accordionTitle}>
                Berapa hari minimal sewa mobil lepas kunci?
              </span>
            </Accordion.Header>
            <Accordion.Body>
              Berapa hari minimal sewa mobil lepas kunci?
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header className={style.selectForm}>
              <span className={style.accordionTitle}>
                Berapa hari sebelumnya sabaiknya booking sewa mobil?
              </span>
            </Accordion.Header>
            <Accordion.Body>one</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header className={style.selectForm}>
              <span className={style.accordionTitle}>
                Apakah Ada biaya antar-jemput?
              </span>
            </Accordion.Header>
            <Accordion.Body>one</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header className={style.selectForm}>
              <span className={style.accordionTitle}>
                Bagaimana jika terjadi kecelakaan
              </span>
            </Accordion.Header>
            <Accordion.Body>one</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </div>
  );
};

export default Faq;
