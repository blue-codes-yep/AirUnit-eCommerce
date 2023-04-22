import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Products from './components/Products';
import { Box, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';

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
        <Typography variant="h3" component="h1">
          Welcome to the Aircon E-commerce Site
        </Typography>
        <Typography variant="body1">
          This is a simple homepage for testing purposes.
        </Typography>
        <Typography variant="h5" component="h2">
          {message}
        </Typography>
        <Box>
          <Carousel>
            <div>
              <Products startIndex={0} />
            </div>
            <div>
              <Products startIndex={1} />
            </div>
          </Carousel>
        </Box>
      </header>
    </div>
  );
}

export default App;