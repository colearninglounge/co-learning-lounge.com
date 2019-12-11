/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              // src={require("logo-here")}
            ></img>
            <h1 className="h1-seo">Co-learning Lounge</h1>
            {/* <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3> */}
          </div>
          <h6 className="category category-absolute">
            Designed and coded by{" the commmunity"}
            
            .
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
