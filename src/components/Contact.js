import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com"

export const Contact = () => {
  // const formInitialDetails = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // }

  const [loading, setLoading] = useState();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_rcgqlja', 'template_tv982zp', form.current, 'h323G-r1G3JnKE4c-')
      .then((result) => {
          console.log(result.text);
          setLoading(false);
      }, (error) => {
          console.log(error.text);
          setLoading(false);
      });
  };

  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  // const [buttonText, setButtonText] = useState('Send');
  // const [status, setStatus] = useState({});

  // const onFormUpdate = (category, value) => {
  //     setFormDetails({
  //       ...formDetails,
  //       [category]: value
  //     })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code === 200) {
  //     setStatus({ succes: true, message: 'Message sent successfully'});
  //   } else {
  //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
  //   }
  // };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_name"  placeholder="Full Name"/>
                    </Col>
                    {/* <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Last Name"/>
                    </Col> */}
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="user_email" placeholder="Email Address" />
                    </Col>
                    {/* <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No." name="user_phone" />
                    </Col> */}
                    <Col size={12} lg={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Message"></textarea>
                    </Col>
                    {
                      loading && 
                      <Col>
                        <button type="submit" value="Send">Sending....</button>
                      </Col>
                    }

                    {
                      !loading && 
                      <Col>
                      <button type="submit" value="Send">Submit</button>
                    </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}