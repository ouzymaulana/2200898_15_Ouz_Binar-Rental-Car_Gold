import { Col, Form } from "react-bootstrap";
import "./../style/faq.css";

const Faq = () => {
  return (
    <div className="faq d-flex">
      <Col className="faq-title">
        <p>Frequently Asked Question</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </Col>
      <Col className="d-flex flex-column gap-3">
        <Form.Select
          className="select-form"
          aria-label="Default select example"
          size="lg"
        >
          <option>Apa saja syarat yang dibutuhkan?</option>
          <option value="1">One</option>
        </Form.Select>
        <Form.Select
          className="select-form"
          aria-label="Default select example"
          size="lg"
        >
          <option>Berapa hari minimal sewa mobil lepas kunci?</option>
          <option value="1">One</option>
        </Form.Select>
        <Form.Select
          className="select-form"
          aria-label="Default select example"
          size="lg"
          // style={{ whiteSpace: 'pre-line' }}
        >
          <option>Berapa hari sebelumnya sabaiknya booking sewa mobil?</option>
          <option value="1">One</option>
        </Form.Select>
        <Form.Select
          className="select-form"
          aria-label="Default select example"
          size="lg"
        >
          <option>Apakah Ada biaya antar-jemput?</option>
          <option value="1">One</option>
        </Form.Select>
        <Form.Select
          className="select-form"
          aria-label="Default select example"
          size="lg"
        >
          <option>Bagaimana jika terjadi kecelakaan</option>
          <option value="1">One</option>
        </Form.Select>
      </Col>
    </div>
  );
};

export default Faq;
