import React from "react";
import {
    Container,
    Row,
    Col
  } from "reactstrap";
import IndexNavbar from "../components/Navbars/IndexNavbar.js";

function Typeform() {
    React.useEffect(() => {
      document.body.classList.add("index-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        document.body.classList.remove("index-page");
        document.body.classList.remove("sidebar-collapse");
      };
    });
    return (
      <>
      <IndexNavbar />
        <div className="section section-about-us">
                        <Container>
                            <Row className="justify-content-center text-center">
                                <Col lg="12" md="12">
                                    <h3 className="title" style={{marginTop: '15px'}}>Talent Hunt</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="ml-auto mr-auto text-center" md="12">
                                    <div 
                                        className="typeform-widget"
                                        data-url="https://colearninglounge.typeform.com/to/dYGKfd"
                                        data-transparency="50"
                                        data-hide-headers={true}
                                        data-hide-footer={true} 
                                        style={{width: 100 + '%', height: 500 + 'px'}}>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
            </div>
          </>
          );
}

export default Typeform;