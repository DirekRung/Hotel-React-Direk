import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ensure you have this file for custom styles
import Logo from './logo.png'

const App = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '50%',minWidth:'50%' }}>
      {/* Logo Section */}
      <img src={Logo} alt="Logo" style={{ width: '20%', marginBottom: '20px' }} />

      {/* Login Form Section */}
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
