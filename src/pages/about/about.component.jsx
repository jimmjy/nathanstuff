import React from "react";

// bootstrap
import { Container, Row, Col } from "react-bootstrap";

// data
import { aboutUs } from "../../data/about";

// styles
import "./about.styles.scss";

const About = () => (
  <div className='about-wrapper'>
    <Container className='about-body shadow'>
      <Row>
        <Col>
          <h2 className='about-heading'>{aboutUs.headingOne}</h2>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        {aboutUs.contentOne.map((para) => (
          <Col lg={5}>
            <p className='about-content'>{para}</p>
          </Col>
        ))}
      </Row>
    </Container>
    <Container className='about-body shadow'>
      <Row>
        <Col>
          <h2 className='about-heading'>{aboutUs.headingTwo}</h2>
        </Col>
      </Row>
      <Row className='justify-content-center why-us-body'>
        {aboutUs.contentTwo.map((para) => (
          <Col lg={5}>
            <h5 className='why-us-heading'>{para.heading}</h5>
            <p className='why-us-content'>{para.content}</p>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default About;
