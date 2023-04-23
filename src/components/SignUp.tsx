import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function SignUp() {
  return (
    <Box>
      <Typography variant="h4">Sign Up</Typography>
      <TextField label="Email" type="email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary">Sign Up</Button>
    </Box>
  );
}

export default SignUp;