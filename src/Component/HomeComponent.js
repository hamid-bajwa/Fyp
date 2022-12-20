import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Col,
  Row,
  Collapse,
} from "reactstrap";
import "./css/HomeComponent.css";
function Home(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="container-fluid">
        <div className="searchContainer">
          <div className="p-4 pt-5">
            {/* Search */}
            <div className="row mb-3 justify-content-center">
              <div className="col-12 col-sm-8 col-md-8 col-lg-4 ">
                <form className="justify-content-center ">
                  {/*                       
                     <label class="label" for="form1">Search?</label> */}
                  <input
                    className="form-control input"
                    type="text"
                    placeholder="Search"
                  ></input>
                </form>
              </div>
            </div>

            {/* City, major , degree level */}

            <div className="row mb-3 justify-content-center">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <form className="justify-content-center ">
                  <input
                    className="form-control input"
                    type="text"
                    placeholder="City"
                  ></input>
                  {/* <label class="label" for="form1">City</label> */}
                </form>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <form className="justify-content-center ">
                  <input
                    className="form-control input"
                    type="text"
                    placeholder="Major"
                  ></input>
                  {/* <label class="label" for="form1">Major</label> */}
                </form>
              </div>

              <div className="col-12 col-sm-  col-md-4 col-lg-3 mb-3 flex">
                <form className=" ">
                  <input
                    className="form-control input"
                    type="text"
                    placeholder="Degree level"
                  ></input>
                  {/* <label class="label" for="form1">Degree Level</label> */}
                </form>
              </div>
            </div>

            {/* Submit buttons */}
            <Row className="mb-3 ">
              <Col className="d-flex justify-content-end">
                <Button className="btn  btn-warning px-5 " type="submit">
                  Search
                </Button>
              </Col>

              <Col>
                <Button
                  className="btn btn-warning px-4"
                  id="personalizedSearch"
                  onClick={toggle}
                >
                  Filter search
                </Button>
              </Col>
            </Row>

            {/* personalized Searched */}
            <Row>
              <Collapse isOpen={isOpen}>
                <div className="row mb-3 justify-content-center">
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <form className="justify-content-center ">
                      <input
                        className="form-control input"
                        type="text"
                        placeholder="University Name"
                      ></input>
                      {/* <label class="label" for="form1">City</label> */}
                    </form>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <form className="justify-content-center ">
                      <input
                        className="form-control input"
                        type="text"
                        placeholder="Cgpa"
                      ></input>
                      {/* <label class="label" for="form1">Major</label> */}
                    </form>
                  </div>
                </div>
              </Collapse>
            </Row>
          </div>
        </div>
      </div>

      {/* Card div */}
      <div className="container-fluid">
        <hr className="hr" />
        <div className="SearchResult">
          <p className="p p-2">Number Of scholarships :</p>

          <Row>
            <Col xs="1" sm="2" md="3" lg="3" />
            <Col xs="10" sm="8" md="6" lg="6">
              <Card className="card ">
                <CardBody>
                  <CardTitle tag="h5">University Name</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    location
                  </CardSubtitle>
                  <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error expedita ab quas voluptatum, autem ex non facere
                    repellendus beatae? Fuga repudiandae ipsum commodi dolor
                    totam numquam possimus velit suscipit eos!
                  </CardText>
                  <CardSubtitle className="mt-2 mb-2 text-muted" tag="h6">
                    Requirment
                  </CardSubtitle>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button className="btn-warning btn text-right">
                      Apply here <i class="fa-solid fa-link "></i>
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm="2" />
          </Row>
          <br />
        </div>
      </div>
    </>
  );
}

// function RenderPersonalizedSearch() {
//   return (
//     <div className="">
//       <Button>hi</Button>
//     </div>
//   );
// }
export default Home;
