import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import './App.css';
import Products from './components/Products';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Box, Typography, CssBaseline } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

const GlobalContext = React.createContext({
  isLoading: false,
  error: null,
});

function App() {
  const [page, setPage] = useState("home");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        console.log(response.data);
        setMessage(response.data)
        setProducts(response.data.products);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
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
                    Message: {message}
                  </Typography>
                  <Box>
                    <Carousel>
                      <div>
                        <Products startIndex={0} products={products} />
                      </div>
                      <div>
                        <Products startIndex={1} products={products} />
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

const useGlobalContext = () => {
  const { isLoading, error } = useContext(GlobalContext);
  return { isLoading, error };
};

export default App;