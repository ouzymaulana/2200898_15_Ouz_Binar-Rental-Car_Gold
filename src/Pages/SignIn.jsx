import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import CloseButton from "react-bootstrap/CloseButton";
import SidePageRegistry from "../Components/SidePageRegistry";
import styles from "../style/signIn.module.css";
import Logo from "../assets/img/Logo.jpg";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const baseURL = "https://api-car-rental.binaracademy.org/customer/auth/login";
  const navigate = useNavigate();
  const location = useLocation();

  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError("");
  };

  const handleClose = () => {
    navigate(location.state?.from || "/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        email: email,
        password: password,
      };

      const result = await axios.post(baseURL, data);
      if (result) {
        localStorage.setItem("token", result.data.access_token);
        navigate(`/`);
      }
    } catch (error) {
      setError("Masukkan email dan password yang benar", error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className="navbar">
          <img className={styles.logo} src={Logo} alt="" />
          <CloseButton className={styles.close} onClick={handleClose} />
        </div>
        <div className={styles.regist}>
          <h1 className={styles.title}>Welcome Back!</h1>

          <div>
            {error && (
              <Alert className={styles.alert} variant="danger">
                <p>{error}</p>
              </Alert>
            )}
          </div>

          <Form className={styles.form}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Contoh: johndee@gmail.com"
                onChange={onChangeEmail}
                value={email}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="6+ karakter"
                onChange={onChangePassword}
                value={password}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>

            <Button
              className={styles.button}
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </Form>
          <p className={styles.suggestion}>
            Don&apos;t have an account?{" "}
            <Link to="/sign-up">Sign up for free</Link>
          </p>
        </div>

        <div className={styles.sidebar}>
          <SidePageRegistry />
        </div>
      </div>
    </>
  );
}
