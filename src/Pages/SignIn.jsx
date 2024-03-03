import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import SidePageRegistry from "../Components/SidePageRegistry";
import styles from "../style/signIn.module.css";
import Logo from "../assets/img/Logo.jpg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const baseURL = "https://api-car-rental.binaracademy.org/customer/auth/login";
  const navigate = useNavigate();

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
      console.error("error signing in", error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.regist}>
          <img src={Logo} alt="" />
          <h1>Welcome Back</h1>

          <Alert key="danger" variant="danger">
            <p>{error}</p>
          </Alert>
          <Form>
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

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Sign In
            </Button>
          </Form>
          <p>
            Don&apos;t have an account? <a href="#">Sign Up for free</a>
          </p>
        </div>

        <div className={styles.sidebar}>
          <SidePageRegistry />
        </div>
      </div>
    </>
  );
}
