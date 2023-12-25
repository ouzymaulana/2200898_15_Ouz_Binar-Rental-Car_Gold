import { Button, Form, Row } from "react-bootstrap";
import "../../style/formSearchCars.css";

const SearchForm = () => {
  return (
    <Row className="form-search-cars bg-white position-relative">
      <Form className="d-flex gap-3">
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Nama Mobil</Form.Label>
          <Form.Control type="email" placeholder="Ketik nama/tipe Mobil" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Kategori</Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="formSelect"
          >
            <option>Masukkan Kapasitas Mobil</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Harga</Form.Label>
          <Form.Select
            className="formSelect"
            aria-label="Default select example"
          >
            <option>Masukkan Harga Sewa Perhari</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Status</Form.Label>
          <Form.Select
            className="formSelect"
            aria-label="Default select example"
          >
            <option>Disewa</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          className="n d-flex justify-content-center align-items-end"
          controlId="formGroupPassword"
        >
          <Button>Cari Mobil</Button>
        </Form.Group>
      </Form>
    </Row>
  );
};

export default SearchForm;
