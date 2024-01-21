import { Button, Form, Row } from "react-bootstrap";
import "../../style/formSearchCars.css";
import style from "../../style/cards.module.css";
import CarsCard from "./CarsCard";
import { useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom";

const SearchForm = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    namaMobil: "",
    kategori: "",
    minHarga: "",
    maxHarga: "",
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
        name: formData.namaMobil || "",
        category: formData.kategori || "",
        isRented: formData.status || "",
        minPrice: formData.minHarga || "",
        maxPrice: formData.maxHarga || "",
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

  const handleChangePrice = (value) => {
    if (value === "< 400000") {
      console.log("pertama");
      setFormData((prevData) => ({
        ...prevData,
        ["maxHarga"]: 400000,
        ["minHarga"]: "",
      }));
    } else if (value === "400000-600000") {
      console.log("hai");
      setFormData((prevData) => ({
        ...prevData,
        ["minHarga"]: 400000,
        ["maxHarga"]: 600000,
      }));
    } else {
      console.log("ketiga");
      setFormData((prevData) => ({
        ...prevData,
        ["maxHarga"]: "",
        ["minHarga"]: 400000,
      }));
    }
  };

  return (
    <>
      <Row className="form-search-cars bg-white position-relative">
        <Form
          className="d-flex gap-3 justify-content-between"
          onSubmit={handleSearchCars}
        >
          <Form.Group className="form-group" controlId="carName">
            <Form.Label>Nama Mobil</Form.Label>
            <Form.Control
              disabled={pathname === `/search-cars/detail/${id}`}
              type="text"
              placeholder={
                pathname === `/search-cars/detail/${id}`
                  ? ""
                  : "Ketik nama/tipe Mobil"
              }
              name="carName"
              onChange={(e) => handleChange(e.target.value, "namaMobil")}
            />
          </Form.Group>
          <Form.Group className="form-group" controlId="category">
            <Form.Label>Kategori</Form.Label>
            <Form.Select
              aria-label="select"
              disabled={pathname === `/search-cars/detail/${id}`}
              onChange={(e) => handleChange(e.target.value, "kategori")}
            >
              {pathname === `/search-cars/detail/${id}` && <option></option>}
              {pathname !== `/search-cars/detail/${id}` && (
                <>
                  <option value={""} disabled selected hidden>
                    Masukkan Kapasitas Mobil
                  </option>
                  <option value="small">2 - 4</option>
                  <option value="medium">4 - 6</option>
                  <option value="large">6 - 8</option>
                </>
              )}
            </Form.Select>
          </Form.Group>
          <Form.Group className="form-group" controlId="price">
            <Form.Label>Harga</Form.Label>
            <Form.Select
              aria-label="select"
              disabled={pathname === `/search-cars/detail/${id}`}
              onChange={(e) => handleChangePrice(e.target.value)}
            >
              {pathname === `/search-cars/detail/${id}` && <option></option>}

              {pathname !== `/search-cars/detail/${id}` && (
                <>
                  <option value={""} disabled selected hidden>
                    Masukkan Harga Sewa Perhari
                  </option>
                  <option value="< 400000"> {`<`} Rp. 400.000</option>
                  <option value="400000-600000">Rp. 400.000 - 600.000</option>
                  <option value="> 600000">{`>`} Rp. 600.000</option>
                </>
              )}
            </Form.Select>
          </Form.Group>
          <Form.Group className="form-group" controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Select
              className="form-select-status"
              aria-label="select"
              disabled={pathname === `/search-cars/detail/${id}`}
              onChange={(e) => handleChange(e.target.value, "status")}
            >
              {pathname === `/search-cars/detail/${id}` && <option></option>}
              {pathname !== `/search-cars/detail/${id}` && (
                <>
                  <option value={true}>Disewa</option>
                  <option value={false} selected>
                    Tersedia
                  </option>
                </>
              )}
            </Form.Select>
          </Form.Group>
          {pathname === `/search-cars/detail/${id}` || (
            <Form.Group className="d-flex justify-content-center align-items-end">
              <Button type="submit">Cari Mobil</Button>
            </Form.Group>
          )}
        </Form>
      </Row>
      {dataCars?.length > 0 && (
        <Row className={`${style.cards} gap-4`}>
          {dataCars.map((car) => (
            <CarsCard carData={car} key={car.id} />
          ))}
        </Row>
      )}
    </>
  );
};

export default SearchForm;
