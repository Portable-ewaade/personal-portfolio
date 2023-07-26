import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h2>Kehinde Adetule</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="http://www.linkedin.com/in/kehinde-adetule-4a589a258"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/kehinde.funmilayo.18?mibextid=LQQJ4d"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/portable_ewaade?igshid=NTc4MTIwNjQ2YQ"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}