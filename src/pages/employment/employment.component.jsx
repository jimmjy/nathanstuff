import React from "react";

import { Container, Row, Col } from "react-bootstrap";

// data
import { employmentInfo } from "../../data/employment";

// styles
import "./employment.styles.scss";

const Employment = () => (
  <div className='employment-wrapper'>
    <Container className='about-body shadow employment-width'>
      <h2 className='employment-title'>{employmentInfo.title}</h2>
      <Row className='justify-content-center'>
        <Col lg={8}>
          <p className='about-content employment-content'>
            {employmentInfo.questions}
          </p>
        </Col>
        <Col lg={8}>
          <p className='about-content employment-content'>
            {employmentInfo.contactUs}
          </p>
          <div className='button-container'>
            <a
              className='btn btn-outline-primary outline-color'
              href='tel:555-555-1212'
            >
              555-555-1212
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Employment;
