import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//components
import Card from "../../components/testimonialCard/testimonialCard";

//styles
import "./testimonals.scss";

//data
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <div className='testimonial-wrapper'>
      <Container>
        <Row className='justify-content-between'>
          {testimonials.map(({ name, description }) => (
            <Col lg={4} md={6} className='test-col'>
              <Card name={name} description={description} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
