import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
// core components

function Introduction() {

  return (
    <>

      <div className="section section-about-us">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8" id="mission">
              <h3 className="title">Vision</h3>
              <h5 className="description">
                To enable millennials, understand and leverage open source content thereby,
                providing them an opportunity to give back to the community with good quality
                content and affordable education.
              </h5>
            </Col>
          </Row>
          <div className="separator separator-primary"></div>
          <div className="section-story-overview">
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h3 className="title">Mission</h3>
                <h5 className="description">
                  Our mission is to provide the community with well-organized quality content that helps them solve real-world problems. We as a community will provide open source solutions for real-world problems to ensure we lead by example.
                </h5>
                <h5 className="description">
                  To know more about how we try to achieve this please read through the rest of our content below.
                </h5>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="section section-team text-center grey-background" id="what-do-we-offer">
        <Container>
          <h3 className="title">What do we offer?</h3>
          <div className="team">
            <Row>
              <Col md="6">
                <div className="text-left team-player">
                  <h4 className="title">Project-based Learning</h4>
                  <p className="description">
                    We believe working on real-world projects help hone one’s skills. We collectively curate and select some of these projects and work with experienced community members in solving them. This program is for people who have prior experience in relevant technologies like CV, NLP, ML, etc.
                  </p>
                  <p className="description">
                    <Button className="btn-round bg-info" 
                      href="https://github.com/colearninglounge/co-learning-lounge/blob/master/project_based_learning.md"
                      color="primary"
                      target="_blank">
                      Learn More
                    </Button>
                  </p>
                </div>
              </Col>
              <Col md="6">
                <div className="text-left team-player">
                  <h4 className="title">Collaborative  Learning</h4>
                  <p className="description">
                    Platform like Kaggle post real-world problems as competitions. Experts solves, share, and discuss their solution. We prefer to start by learning from problems already solved by experts. Hence interested folks from the community come together and try to solve the problem again by keeping existing solution and discussion as a reference. Once you head to the next level, you can work alongside a mentor to work on unsolved problem statements to gain first hand experience time-critical problems.
                  </p>
                  <p className="description">
                    <Button className="btn-round bg-info" 
                      href="https://github.com/colearninglounge/co-learning-lounge/blob/master/collaborative_learning.md"
                      color="primary"
                      target="_blank">
                      Learn More
                    </Button>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="section section-team text-center" id="events">
        <Container>
          <h3 className="title">Events</h3>
          <div className="team">
            <Row>
              <Col md="6">
                <div className="text-left team-player">
                  <h4 className="title">Workshop</h4>
                  <p className="justify-content-center description">
                    With 3 to 4 hours of the craving hands-on interactive session to explore great topics in AI/ML followed by networking, we try to make the next generation of technology enthusiasts.
                  </p>
                </div>
              </Col>
              <Col md="6">
                <div className="text-left team-player">
                  <h4 className="title">Talks</h4>
                  <p className="description">
                    One on One interactive sessions with industry experts to discuss on tops that matter. 
                    We will also have live QnA sessions to ensure you get what you were looking for.
                  </p>
                </div>
              </Col>
              <Col md="6">
                <div className="text-left team-player">
                  <h4 className="title">Bootcamp</h4>
                  <p className="description">
                    Here we organize a 1 to 2 days event where we learn a concept or a topic end to end. 
                    We first start with an introductory session followed by a hands-on. 
                    After this, we have a session where participants choose one of their own projects and 
                    we provide our assistance/guidance to help you solve them and in the end, the participants 
                    can show a demo if they are interested.
                  </p>
                </div>
              </Col>
              <Col md="6">
                <div className="text-left team-player">
                  <h4 className="title">Meetup</h4>
                  <p className="description">
                    These interactive sessions are informal events where we gather to meet like-minded people and make a connection for life. Each event will have a theme or a series of activities pre-planned like showcasing your work or demos, sharing your Kaggle problem-solving experience, resume reviewing and a lot more.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <p className="description"><strong className="emphText">Networking will be at the end of each session.</strong></p>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <p className="description">
                <Button className="btn-round bg-info" 
                  href="https://github.com/colearninglounge/co-learning-lounge/blob/master/what_do_we_do.md"
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

export default Introduction;
