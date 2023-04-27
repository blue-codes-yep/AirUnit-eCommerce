import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.status === 201) {
      // User successfully registered
      console.log(data.message);
      // Redirect to the sign-in page or show a success message
    } else {
      // Registration failed
      console.log(data.message);
      // Show an error message to the user
    }
  };

  return (
    <Box onSubmit={handleSubmit} component="form">
      <Typography variant="h4">Sign Up</Typography>
      <TextField
        label="Username"
        type="text"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Sign Up
      </Button>
    </Box>
  );
}

export default SignUp;
