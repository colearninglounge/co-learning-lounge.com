import React from "react";
// reactstrap components
import { Button, Container, Row, Col, CarouselItem } from "reactstrap";

function WhatYouGet() {
  return (
    <>

      <div className="section section-about-us grey-background" id="what-do-you-get">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="8" md="12">
              <h3 className="title">What do you get?</h3>
              <p className="description">We strongly believe that any community has one of the following members.</p>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="6">
              <h3 className="title">Seekers</h3>
              <h5 className="description">
                We provide the right resource for you to get started in this field.
                We also have open source content on GitHub that will help you get more hands-on with the real-world problem
                solved by the community members with proper documentation which will help you understand real-world scenarios.
                We also have paid mentorship programs that will help you solve a problem yourself with the right guidance.
              </h5>
            </Col>

            <Col className="ml-auto mr-auto" md="6">
              <div className="section-story-overview">
                <CarouselItem className="corousel-single-img">
                  <img alt="Fireside chat with Daksh Varshneya" className="img_square" src={require("../../assets/img/events/daksh_varshneya_fireside_chat.jpg")}></img>
                  <div className="carousel-caption d-md-block"><h5>Fireside chat with Daksh Varshneya, ML researcher @Rasa</h5></div>
                </CarouselItem>
              </div>
            </Col>
          </Row>
          <div className="separator separator-primary"></div>
          <div className="section-story-overview">
            <Row>
              <Col className="ml-auto mr-auto" md="6">
              <div className="section-story-overview">
              <CarouselItem className="corousel-single-img">
                <img alt="Yogesh Kothiya, RASA based Chatbot Building - Bengaluru" className="img_square" src={require("../../assets/img/events/yogesh_bengaluru_rasa.jpg")}></img>
                <div className="carousel-caption d-md-block"><h5>Yogesh Kothiya, RASA based Chatbot Building - Bengaluru</h5></div>
              </CarouselItem>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h3 className="title">Doers</h3>
                <h5 className="description">
                  Are you here to make a difference and provide value to the work you do?
                  You can contribute content to our community.
                  Through our knowledge-sharing events, we help your content reach a wider audience.
                  This visibility helps you promote yourself as a brand, grow your connections and help people along the way.
                  We help conduct workshops and boot camps which you can be an integral part of or even organize one yourself with our help.
                  You can even earn out of this going forward.
                </h5>
                <h3 className="description"><strong>We help seekers become doers!</strong></h3>
              </Col>
            </Row>
          </div>
          {/* <div className="separator separator-primary"></div> */}
          <div className="section-story-overview">
            <Row>
              <Col className="text-center">
                <p className="description">
                <Button className="btn-round bg-info" 
                  href="https://github.com/colearninglounge/co-learning-lounge/blob/master/what_is_in_it_for_you.md"
                  color="primary"
                  target="_blank">
                  Learn More
                </Button>
                </p>
              </Col>
            </Row>
            </div>
        </Container>
      </div>

    </>
  );
}

export default WhatYouGet;