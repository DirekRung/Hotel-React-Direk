import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png'; // Replace with the path to your logo image
import './Login.css'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ Height: "100%"  }}>
      <Row className='row1'>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Image src={logo} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Col>

        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Card style={{ width: '100%', maxWidth: '400px' }}>
            <Card.Body>
              <Card.Title className="text-center" style={{ color: '#007bff' }}>Login</Card.Title>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" block style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
