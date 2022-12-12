import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  Col,
  Row,
  Toast,
  ToastHeader,
  ToastBody
} from "reactstrap";
import "./css/HomeComponent.css";
function Home(props) {

  const {active,setActive}=useState(false);


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

                  <div className="col-12 col-sm-  col-md-4 col-lg-3 mb-3">
                    <form className="justify-content-center ">
                      <input
                        className="form-control input"
                        type="text"
                        placeholder="Degree level"
                      ></input>
                      {/* <label class="label" for="form1">Degree Level</label> */}
                    </form>
                  </div>
                </div>
                <Row>
                {/* Submit buttons */}
                <div className="row mb-3">
                  <div className="col-sm-1 col-lg-3" />

                  <div className="col-6 col-sm-5 col-lg-3">
                    <form className="justify-content-center">
                      <Button
                        className="btn form-control btn-warning"
                        type="text"
                      >
                        Search for me
                      </Button>
                    </form>
                  </div>

                  <div className="col-6 col-sm-5 col-lg-3">
                    <form className="justify-content-center">
                      <button className="btn form-control btn-warning"
                        type="text"
                        id="personalizedSearch"

                        onClick={()=> setActive(!active)}
                      >
                        Personalised search
                      </button>
                      {/* <Button
                        className="btn form-control btn-warning"
                        type="text"
                        id="personalizedSearch"

                        onClick={()=> setActive(true)}
                      >
                        Personalised search
                      </Button> */}
                    </form>
                  </div>

                  <div className="col-sm-1 col-lg-3" />
                </div>
                <Row>
                  {active  && <div>asjhg</div>}
                </Row>

                <Row>
                  {!active && <div>dkjh</div>}
                </Row>

                

                </Row>

              </div>
            </div>
            
            
          
          
          </div>

{/* Card div */}
      <div className="container-fluid">
        <hr className="hr"/>
        <div className="SearchResult">
          
          <p className="p p-2">Number Of scholarships :</p>


          <Row>
            <Col xs="1" sm="2" md="3"  lg="3"/>
            <Col xs="10" sm="8" md="6" lg="6" >
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
                  <Button className="btn-warning btn text-right">Apply here <i class="fa-solid fa-link "></i></Button>
              
                </div>
             
              </CardBody>
              

              </Card>
            </Col>
            <Col sm="2"/>
          </Row>
          <br/>


         
        </div>
      </div>
    </>
  );
}


function RenderPersonalizedSearch(){

  return(
    <div className="">
    <Button>hi</Button>
    </div>


  );
}
export default Home;
