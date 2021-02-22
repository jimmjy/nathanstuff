import React from "react";
import Card from "react-bootstrap/Card";

//styles
import "./testimonialCard.scss";

const TestimonialCard = ({ description, name }) => {
  return (
    <Card>
      <Card.Body className='shadow'>
        <blockquote className='blockquote mb-0'>
          <p>{description}</p>
          <footer className='blockquote-footer'>{name}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default TestimonialCard;
