/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Row,
  Col,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <div className="contact-us">
              <div>
              Still not sure how to be part of the community and contribute or have further questions?
              </div>
              <div>
              Email us @ <a href="mailto:colearninglounge@gmail.com">colearninglounge@gmail.com</a>
            </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Nav>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/groups/colearninglounge/"
                  target="_blank"
                  id="facebook-tooltip">
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Join us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/company/colearninglounge"
                  target="_blank"
                  id="linkedin-tooltip">
                  <i className="fab fa-linkedin"></i>
                  <p className="d-lg-none d-xl-none">LinkedIn</p>
                </NavLink>
                <UncontrolledTooltip target="#linkedin-tooltip">
                  Follow us on LinkedIn
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/colearninglounge/co-learning-lounge/"
                  target="_blank"
                  id="github-tooltip">
                  <i className="fab fa-github"></i>
                  <p className="d-lg-none d-xl-none">GitHub</p>
                </NavLink>
                <UncontrolledTooltip target="#github-tooltip">
                  Contribute with us on GitHub
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://co-learninglounge.slack.com/"
                  target="_blank"
                  id="slack-tooltip">
                  <i className="fab fa-slack"></i>
                  <p className="d-lg-none d-xl-none">Slack</p>
                </NavLink>
                <UncontrolledTooltip target="#slack-tooltip">
                  Join us on Slack
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/colearninglounge/"
                  target="_blank"
                  id="instagram-tooltip">
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
              {/*<NavItem>
                <NavLink
                  href="#"
                  target="_blank"
                  id="telegram-tooltip">
                  <i className="fab fa-telegram"></i>
                  <p className="d-lg-none d-xl-none">Telegram</p>
                </NavLink>
                <UncontrolledTooltip target="#telegram-tooltip">
                  Follow us on Telegram
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  target="_blank"
                  id="twitter-tooltip">
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>*/}
            </Nav>
          </Col>
          <div className="separator separator-primary"></div>
          <Col><div className="copyright" id="copyright">
            © Colearning Lounge {new Date().getFullYear()}
            .
        </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DarkFooter;
