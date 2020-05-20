import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

//todo need to come from cms
const items = [
  {
    src: require("../../assets/img/events/pyConf_Yogesh_2.jpg"),
    altText: "Yogesh Kothiya, RASA based Chatbot Building at PyConf - Hyderabad",
    caption: "Yogesh Kothiya, RASA based Chatbot Building at PyConf - Hyderabad"
  }, 
  {
    src: require("../../assets/img/events/venkata_durga_object_detection_YOLO.jpg"),
    altText: "Venkata Durga Rao Gambali, Object detection using YOLO - Hyderabad",
    caption: "Venkata Durga Rao Gambali, Object detection using YOLO - Hyderabad"
  },
  {
    src: require("../../assets/img/events/shantanu_mittal_rasa_chatbot.jpg"),
    altText: "Shantanu Mittal (DATUM), RASA based Chatbot Building - Mathura",
    caption: "Shantanu Mittal (DATUM), RASA based Chatbot Building - Mathura"
  },
  {
    src: require("../../assets/img/events/srihari_pramod_data_visualization.jpg"),
    altText: "SrihariPramod K, Data Visualization using Tableau - Hyderabad",
    caption: "SrihariPramod K, Data Visualization using Tableau - Hyderabad"
  },
  {
    src: require("../../assets/img/events/Harin_Joshi_RASA_2.jpg"),
    altText: "Harin Joshi, RASA based Chatbot Building - Mumbai",
    caption: "Harin Joshi, RASA based Chatbot Building - Mumbai"
  },
  {
    src: require("../../assets/img/events/akhil_misri_dialogflow.jpg"),
    altText: "Akhil Misri, Dialogflow Workshop - Bengaluru",
    caption: "Akhil Misri, Dialogflow Workshop - Bengaluru"
  },
  {
    src: require("../../assets/img/events/akash_verma_rasa_chatbot.jpg"),
    altText: "Akash Verma, RASA based Chatbot Building - Gurugram",
    caption: "Akash Verma, RASA based Chatbot Building - Gurugram"
  },
  {
    src: require("../../assets/img/events/sachin_rastogi_feature_engineering.jpg"),
    altText: "Sachin Rastogi, Feature Engineering - Hyderabad",
    caption: "Sachin Rastogi, Feature Engineering - Hyderabad"
  }
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg="8" md="12">
            <h3 className="title">Recent events</h3>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map(item => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
