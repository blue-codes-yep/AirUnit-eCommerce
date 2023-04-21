import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Aircon E-commerce Site</h1>
        <p>This is a simple homepage for testing purposes.</p>
        <h2>{message}</h2>
      </header>
    </div>
  );
}

export default App;
