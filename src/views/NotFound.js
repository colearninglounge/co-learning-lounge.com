import React from "react";
import { Helmet } from 'react-helmet'

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import "../assets/css/404.css"

function NotFound() {
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
        <title>CLL - 404</title>
      </Helmet>
      <IndexNavbar />
      <section class="page_404">
        <div class="fluid-container">
          <div class="row">	
            <div class="col-sm-12 text-center main_404">

              <div class="four_zero_four_bg">
                <h1 class="text-center">404</h1>
              </div>

              <div class="content_box_404">
                <h3 class="h2"> No. We do not have that page <span role="img" aria-label="banded-head">🤕</span></h3>
                <p>The page you are looking for is not available!</p>
                <a href="/" class="link_404">Go to Home</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
