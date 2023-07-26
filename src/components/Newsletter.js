// import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  // const [email, setEmail] = useState('');

  // useEffect(() => {
  //   if (status === 'success') clearFields();
  // }, [status])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   email &&
  //   email.indexOf("@") > -1 &&
  //   onValidated({
  //     EMAIL: email
  //   })
  // }

  // const clearFields = () => {
  //   setEmail('');
  // }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <h2 className="text-center mb-3">Tagline</h2>
            <Col md={6} className="mb-2">
              <h4>Building Digital Dreams with Code and Creativity. Code with Passion, Design with Purpose.</h4>
              {/* {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>} */}
            </Col>
            <Col md={6}>
              <h4>Transforming Ideas into Seamless User Experiences. Empowering Businesses with Engaging Frontend Solutions.</h4>
              {/* <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form> */}
            </Col>
          </Row>
        </div>
      </Col>
  )
}