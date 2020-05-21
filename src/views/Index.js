import React from "react";
import { Helmet } from 'react-helmet'

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexHeader from "../components/Headers/IndexHeader.js";
import DarkFooter from "../components/Footers/DarkFooter.js";

import Carousel from "./index-sections/Carousel.js";
import Introduction from "./index-sections/Introduction.js";
import WhatYouGet from "./index-sections/WhatYouGet.js";
import OurReach from "./index-sections/OurReach.js";
import CommunityContribution from "./index-sections/CommunityContribution.js";
import SocialMedia from "./index-sections/SocialMedia.js";

function Index() {
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
        <title>CLL - Homepage</title>
      </Helmet>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          
          <Introduction />
          <Carousel />
          <WhatYouGet />
          <OurReach />
          <SocialMedia />
          <CommunityContribution />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
