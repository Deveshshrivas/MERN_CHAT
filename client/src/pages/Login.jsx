import React from 'react';
import { Container, Paper } from '@mui/material';

const Login = () => {
  return (
    <Container component={"main"} maxWidth="xs">
      <Paper elevation={3} sx={{
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      </Paper>
    </Container>
  );
}

export { Login };