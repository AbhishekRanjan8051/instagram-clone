import React from "react";
import "./login.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Form, Button } from "react-bootstrap";
import { BiLogoFacebookCircle } from "react-icons/bi";

export default function Login() {
  return (
    <div>
      <div className="logincontainer">
        <div className="main">
          <div>
            <span className="headtitle">Instagram</span>
          </div>
          <br />
          <br />

          <div className="login">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <br />
            <Button style={{ width: "100%" }}>Log In</Button>
          </div>
          <hr className="hr-text" data-content="or" />
          <div className="facebooklogin">
            <a href="https://www.facebook.com">
              <BiLogoFacebookCircle /> <span>Login With Facebook</span>
            </a>
            <span>Forgotten your Password?</span>
          </div>
        </div>
      </div>
    </div>
  );
}
