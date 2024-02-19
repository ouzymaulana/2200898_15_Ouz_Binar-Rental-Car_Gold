import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SidePageRegistry from "../Components/SidePageRegistry";
import style from "../style/signIn.module.css";
import Logo from "../assets/img/Logo.jpg";

export default function SignIn() {
  return (
    <>
      <div className={style.container}>
        <img src={Logo} alt="" />
        <h1>Welcome Back</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Contoh: johndee@gmail.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="6+ karakter" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>

          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
        <p>
          Don&apos;t have an account? <a href="#">Sign Up for free</a>
        </p>

        <div className="sidebar">
          <SidePageRegistry />
        </div>
      </div>
    </>
  );
}
