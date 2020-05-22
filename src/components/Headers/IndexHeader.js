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
            backgroundImage: "url(" + require("../../assets/img/events/pyConf_Yogesh_2.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <div className="carousel-caption mainText d-md-block">
              <h1 className="h1-seo anim-typewriter">Learn → Practice → Create → Collaborate → Contribute</h1>
              <h1 className="h1-seo with-out-anim-typewriter">Learn → Practice → Create → Collaborate → Contribute</h1>
              <br></br>
              <h6 className="category">Designed and developed by{" the community"}</h6>
            </div>
          </div>
        </Container>
        <div className="separator separator-primary" id="vision"></div>
      </div>
    </>
  );
}

export default IndexHeader;
