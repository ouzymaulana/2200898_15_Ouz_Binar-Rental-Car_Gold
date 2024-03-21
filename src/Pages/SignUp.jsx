import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import SidePageRegistry from "../Components/SidePageRegistry";
import style from "../style/signUp.module.css";
import Logo from "../assets/img/Logo.jpg";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(false);
  // const [hasSubmitted, setHasSubmitted] = useState(false);
  const baseURL =
    "https://api-car-rental.binaracademy.org/customer/auth/register";
  const navigate = useNavigate();

  const onChangeName = (e) => {
    const value = e.target.value;
    setName(value);
    setError("");
  };

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValidation(value.length >= 6);
    // setHasSubmitted(false);
    setError("");
  };

  const handleClose = () => {
    navigate(location.state?.from || "/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setHasSubmitted(true); // Set submitted flag

    // if (!validatePassword(password)) {
    //   setError("Password must be at least 6 characters long.");
    //   return;
    // }

    try {
      const data = {
        name: name,
        email: email,
        password: password,
      };

      const result = await axios.post(baseURL, data);
      if (result.status === 201) {
        navigate(`/sign-in`);
        setSuccess("sign up success", success);
      }
    } catch (error) {
      console.log(error.response);
      setError("error signing up", error);
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.navbar}>
          <img className={style.logo} src={Logo} alt="" />
          <CloseButton className={style.close} onClick={handleClose} />
        </div>
        <div className={style.regist}>
          <img src={Logo} alt="Binar Car Rental Logo" />
          <h1>Sign Up</h1>

          <div>
            {error && (
              <Alert className={style.alertError} variant="danger">
                <p>{error}</p>
              </Alert>
            )}
          </div>

          <div>
            {error && (
              <Alert className={style.alertSuccess} variant="success">
                <p>{success}</p>
              </Alert>
            )}
          </div>

          <Form className={style.form}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nama*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama Lengkap"
                onChange={onChangeName}
                value={name}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Contoh: johndee@gmail.com"
                onChange={onChangeEmail}
                value={email}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Create Password*</Form.Label>
              <Form.Control
                type="password"
                placeholder="6+ karakter"
                onChange={onChangePassword}
                value={password}
                required
                style={{
                  border: passwordValidation
                    ? "1px solid #ced4da"
                    : "2px solid red",
                }}
              />
              {!passwordValidation && (
                <p style={{ color: "red" }}>
                  Password must be at least 6 characters long.
                </p>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>

            <Button
              className={style.button}
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </Form>
          <p className={style.suggestion}>
            Already have an acoount? <Link to="/sign-in">Sign in here</Link>
          </p>
        </div>

        <div className={style.sidebar}>
          <SidePageRegistry />
        </div>
      </div>
    </>
  );
}
