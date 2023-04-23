import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function SignIn() {
  return (
    <Box>
      <Typography variant="h4">Sign In</Typography>
      <TextField label="Email" type="email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary">Sign In</Button>
    </Box>
  );
}

export default SignIn;