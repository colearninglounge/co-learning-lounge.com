import React from "react";
// reactstrap components
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";

function OurReach() {
    return (
        <>

            <div className="section section-about-us" id="our-reach">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg="8" md="12">
                            <h3 className="title">Our Reach</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="3">
                            <Card className="our-reach-card">
                                <CardBody>
                                    <CardTitle tag="h4">5000+</CardTitle>
                                    <CardText>Community members</CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className="ml-auto mr-auto text-center" md="3">
                            <Card className="our-reach-card">
                                <CardBody>
                                    <CardTitle tag="h4">15+</CardTitle>
                                    <CardText>Events</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="ml-auto mr-auto text-center" md="3">
                            <Card className="our-reach-card">
                                <CardBody>
                                    <CardTitle tag="h4">30+</CardTitle>
                                    <CardText>Contributors</CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className="ml-auto mr-auto text-center" md="3">
                            <Card className="our-reach-card">
                                <CardBody>
                                    <CardTitle tag="h4">4+</CardTitle>
                                    <CardText>Success story</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default OurReach;