import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Button, Col } from "reactstrap";

function SignUp() {
    const [active, setActive] = useState(false)
  return (
    <>
      <div className="vh-100">
        <div className="container-fluid h-custom">
          <h3>Sign up page</h3>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <Col md="8" lg="6" xl="4" className="offset-xl-1">
              <div className="container-fluid">
              
              </div>
            </Col>
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="vh-100"></div>
    </>
  );
}

export default SignUp;
