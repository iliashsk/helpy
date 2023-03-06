import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // send login data to backend for validation
    // if valid, redirect to home page
    navigate('/home');
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const HomePage = () => {
  return (<>
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Welcome to the Vehicle Service Admin Panel</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <Button variant="primary" size="lg" block>
            Manage Mechanics
          </Button>
        </Col>
        <Col md={4}>
          <Button variant="primary" size="lg" block>
            Manage Service Requests
          </Button>
        </Col>
        <Col md={4}>
          <Button variant="primary" size="lg" block>
            Manage Vehicles
          </Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <Button variant="primary" size="lg" block>
            Manage Services
          </Button>
        </Col>
        <Col md={4}>
          <Button variant="primary" size="lg" block>
            Generate Report
          </Button>
        </Col>
        <Col md={4}>
          <Button variant="primary" size="lg" block>
            Manage Users
          </Button>
        </Col>
      </Row>
    </Container>
    <br/>
     <br/>
      <br/>
      <br/>
     <br/>
      <br/>
      <br/>
     <br/>
      <br/>
      <br/>
     <br/>
      <br/>
      <br/>
     <br/>
      <br/>
      <br/>
     <br/>
      <br/>
      <br/>
     <br/>
      <br/>
  </>);
};

export default HomePage;
export { LoginPage};