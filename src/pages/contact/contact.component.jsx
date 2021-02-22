import React, { useState, useContext, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { withRouter } from "react-router-dom";

//context
import { FirebaseContext } from "../../components/Firebase";

// bootstrap
import { Form, Col, Row, Button } from "react-bootstrap";

//styles
import "./contact.styles.scss";

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = ({ history }) => {
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [id, setId] = useState("");

  useEffect(() => {
    setId(uuid());
  }, []);

  const { messages } = useContext(FirebaseContext);

  const onInputChange = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    messages().push({ ...userData, id });
    setUserData(INITIAL_STATE);
    setId("");
    history.push("/");
  };

  return (
    <div className='form-wrapper'>
      <Form onSubmit={onFormSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm='2'>
            Name:
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              name='name'
              required
              onChange={onInputChange}
              value={userData.name}
              className='form-input'
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId='formPlaintextEmail'>
          <Form.Label column sm='2'>
            Email:
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              name='email'
              required
              type='email'
              onChange={onInputChange}
              value={userData.email}
              className='form-input'
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm='2'>
            Phone:
          </Form.Label>
          <Col sm='10'>
            <Form.Control
              name='phone'
              type='tel'
              onChange={onInputChange}
              value={userData.phone}
              className='form-input'
              required
            />
          </Col>
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            rows={6}
            name='message'
            type='textarea'
            onChange={onInputChange}
            value={userData.message}
            required
          />
        </Form.Group>
        <Button variant='outline-primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(Contact);
