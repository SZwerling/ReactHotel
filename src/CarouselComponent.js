import React from "react";
import { UncontrolledCarousel, Row, Col, Container } from "reactstrap";
import { ITEMS } from './CarouselImages';




const Carousel = () => (
    <Row>
      <Col md="8" className="mx-auto">
          <UncontrolledCarousel items={ITEMS} />
      </Col>
    </Row>
);

export default Carousel;