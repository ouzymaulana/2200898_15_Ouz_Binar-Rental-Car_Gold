import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SidePageRegistry from "../components/SidePageRegistry";
import style from "../style/signUp.module.css";
import Logo from "../assets/img/Logo.jpg";

export default function SignUp() {
  return (
    <>
      <div className={style.container}>
        <img src={Logo} alt="" />
        <h1>Sign Up</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nama*</Form.Label>
            <Form.Control type="text" placeholder="Nama Lengkap" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              placeholder="Contoh: johndee@gmail.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password*</Form.Label>
            <Form.Control type="password" placeholder="6+ karakter" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        <p>
          Already have an acoount? <a href="#">Sign In Here</a>
        </p>

        <div className="sidebar">
          <SidePageRegistry />
        </div>
      </div>
    </>
  );
}
