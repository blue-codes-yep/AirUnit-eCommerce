// src/App.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Products from './components/Products';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Box, Typography, CssBaseline } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

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
    <Router>
      <div className="App">
        <CssBaseline />
        <NavBar />
        <Box>
          <header className="App-header">
            <Routes>
              <Route path="/" element={
                <>
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
                </>
              } />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </header>
        </Box>
      </div>
    </Router>
  );
}

export default App;
