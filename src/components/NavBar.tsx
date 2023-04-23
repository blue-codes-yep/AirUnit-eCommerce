// src/NavBar.tsx

import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Box>
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <Button color="inherit">Sign In</Button>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="secondary" style={{ marginLeft: 8 }}>
                Sign Up
              </Button>
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
