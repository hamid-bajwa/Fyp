import { Button } from "bootstrap";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

// Css properties in homeComponent.css
function Contact() {
  return (
    <div className="container mt-5">
      <Row className="mb-1 p-2">
        <h2>Love to hear from you,</h2>
        <h2>
          Get in touch{" "}
          <img
            className="mb-2"
            src="https://img.icons8.com/emoji/40/null/waving-hand-emoji.png"
          />
        </h2>
      </Row>
      

<Card className="mb-4">
    <CardBody className="m-2 mb-3">
      <form className="form ">
        <Row>
          <Col lg="6">
            <div className="form-group">
              <label className="p-1 mb-1 px-1">Your Name</label>
              <input
                className="input2 mb-3 form-control"
                placeholder="Your Name"
              ></input>
            </div>
          </Col>

          <Col lg="6">
            <div className="form-group">
              <label className="p-1 mb-1 px-1">Your Email</label>
              <input
                className="input2  mb-3 form-control"
                placeholder="Your Email"
              ></input>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <div className="form-group">
              <label className="p-1 mb-1 px-1">What your are interested</label>
              <input
                className="input2 mb-3 form-control"
                placeholder="Suggestion or Complaint"
              ></input>
            </div>
          </Col>

          <Col lg="6">
            <div className="form-group">
              <label className="p-1 mb-1 px-1">Phone Number</label>
              <input
                className="input2 phone mb-3 form-control"
                placeholder="Phone Number"
              ></input>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg="12">
            <div className="form-group">
              <label className="p-1 mb-1 px-1">Message</label>
              <textarea
                type="text"
                className="message  mb-4 form-control "
                placeholder="Your message"
              ></textarea>
            </div>
          </Col>
        </Row>
        <Row>
            <div className="d-grid gap-2 d-md-flex justify-content-center">
                  <button className="btn-warning btn text-right btn-lg">Just Send <i class="fa-solid fa-location-arrow"></i></button>
            </div>
        </Row>


      
      </form>

      </CardBody>
      </Card>
    </div>
    
  );
}

export default Contact;
