import { Button, Form, Row } from "react-bootstrap";
import "../../style/formSearchCars.css";
import "../../style/cards.css";
import CarsCard from "./CarsCard";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [formData, setFormData] = useState({
    namaMobil: "",
    kategori: "",
    harga: "",
    status: "",
  });
  const [dataCars, setDataCars] = useState();

  const handleSearchCars = async (e) => {
    e.preventDefault();
    const axiosConfig = {
      headers: {
        accept: "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwMTg3MDQ2OH0.WmZUb7_Bv6ml3HG4AMTC61xRIEZA7hU0WXSLM5IKouc",
      },
      params: {
        name: formData.namaMobil,
        category: formData.kategori,
        isRented: formData.status,
        page: 1,
        pageSize: 10,
      },
    };
    try {
      const response = await axios.get(
        "https://api-car-rental.binaracademy.org/admin/v2/car",
        axiosConfig
      );

      if (response.status === 200) {
        setDataCars(response.data.cars);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (value, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Row className="form-search-cars bg-white position-relative">
        <Form className="d-flex gap-3" onSubmit={handleSearchCars}>
          <Form.Group controlId="carName">
            <Form.Label>Nama Mobil</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ketik nama/tipe Mobil"
              name="carName"
              onChange={(e) => handleChange(e.target.value, "namaMobil")}
            />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Kategori</Form.Label>
            <Form.Select
              aria-label="select"
              onChange={(e) => handleChange(e.target.value, "kategori")}
            >
              <option>Masukkan Kapasitas Mobil</option>
              <option value="small">2 - 4</option>
              <option value="medium">4 - 6</option>
              <option value="large">6 - 8</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Harga</Form.Label>
            <Form.Select
              aria-label="select"
              onChange={(e) => handleChange(e.target.value, "harga")}
            >
              <option>Masukkan Harga Sewa Perhari</option>
              <option value="400000">Rp. 400.000</option>
              <option value="400000-600000">Rp. 400.000 - 600.000</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Select
              className="form-select-status"
              aria-label="select"
              onChange={(e) => handleChange(e.target.value, "status")}
            >
              <option value={true}>Disewa</option>
              <option value={false}>Tersedia</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="d-flex justify-content-center align-items-end">
            <Button className="w-100" type="submit">
              Cari Mobil
            </Button>
          </Form.Group>
        </Form>
      </Row>
      {dataCars?.length > 0 && (
        <Row className="cards gap-4">
          {dataCars.map((car) => (
            <CarsCard carData={car} key={car.id} />
          ))}
        </Row>
      )}
    </>
  );
};

export default SearchForm;
