import React from "react";
import { Helmet } from 'react-helmet'
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
      <Helmet>
        <title>CLL - Community Talent Hunt</title>
      </Helmet>
      <IndexNavbar />
        <div className="section section-about-us">
                        <Container fluid={true} style={{paddingRight: '0px', paddingLeft: '0px'}}>
                            <Row style={{height: '30vh'}}>
                                <Col className="ml-auto mr-auto text-center" md="12">
                                    <div 
                                        className="typeform-widget"
                                        data-url="https://colearninglounge.typeform.com/to/dYGKfd"
                                        data-transparency="0"
                                        data-hide-headers={true}
                                        data-hide-footer={true} 
                                        style={{width: 100 + '%', height: 91 + 'vh'}}>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
            </div>
          </>
          );
}

export default Typeform;