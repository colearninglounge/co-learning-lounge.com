import React from "react";
// reactstrap components
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

import { Link, scroller } from 'react-scroll';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  scroller.scrollTo('scroll-to-element', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart'
  });

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const isNotHomepage = (window.location.pathname !== '/')

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + (isNotHomepage ? '' : navbarColor)} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <div id="navbar-brand">
              <a href="/">
              <img alt="..." className="n-logo" height="75px" src={require("../../assets/img/logo/blue_horizontal.png")}></img>
              {/*Co-learning Lounge*/}
              </a>
            </div>

            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar>
            <Nav navbar>
              <NavItem>
                {isNotHomepage ?
                  <NavLink href="../#vision"> Vision </NavLink> :
                  <NavLink href="#vision">
                    <Link activeClass="active" to="vision" spy={true} smooth={true} duration={800}>Vision</Link>
                  </NavLink>
                }       
              </NavItem>

              <NavItem>
              {isNotHomepage ?
                  <NavLink href="../#mission"> Mission </NavLink> :
              <NavLink
                href="#mission">
                <Link activeClass="active" to="mission" spy={true} smooth={true} duration={800}>Mission</Link>
              </NavLink>
              }
              </NavItem>

              <NavItem>
              {isNotHomepage ?
                  <NavLink href="../#what-do-we-offer"> What do we offer </NavLink> :
                <NavLink
                  href="#what-do-we-offer">
                  <Link activeClass="active" to="what-do-we-offer" spy={true} smooth={true} duration={800}>What do we offer</Link>
                </NavLink>
              }
              </NavItem>

              <NavItem>
              {isNotHomepage ?
                  <NavLink href="../#events"> Events </NavLink> :
                <NavLink
                  href="#events">
                  <Link activeClass="active" to="events" spy={true} smooth={true} duration={800}>Events</Link>
                </NavLink>
              }
              </NavItem>

              <NavItem>
              {isNotHomepage ?
                  <NavLink href="../#what-do-you-get"> What do you get </NavLink> :
                <NavLink
                  href="#what-do-you-get">
                  <Link activeClass="active" to="what-do-you-get" spy={true} smooth={true} duration={800}>What do you get</Link>
                </NavLink>
              }
              </NavItem>

              <NavItem>
              {isNotHomepage ?
                  <NavLink href="../#our-reach"> Our Reach </NavLink> :
                <NavLink
                  href="#our-reach">
                  <Link activeClass="active" to="our-reach" spy={true} smooth={true} duration={800}>Our Reach</Link>
                </NavLink>
              }
              </NavItem>

              <NavItem>
              <NavLink
                href="/community-talent-hunt">
                Community
              </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Components</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    All components
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
