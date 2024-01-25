// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Login1 from './Login'

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <Container className="mt-5">
      {loggedInUser ? (
        <h1>Welcome, {loggedInUser}!</h1>
      ) : (
        <Login1 onLogin={handleLogin} />
      )}
    </Container>
  );
}

export default App;
