import React, { useState } from 'react';
import { TextField, Container, Paper, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VisuallyHiddenInput from '../components/styles/StyledComponents/VisuallyHiddenInput';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);

  return (
    <Container component="main" maxWidth="xs" sx={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Paper elevation={3} sx={{
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {
          isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form style={{
                width: "100%",
                marginTop: "1rem",
              }}>
                <TextField required fullWidth label='UserName' margin='normal' variant='outlined' />
                <TextField required fullWidth label='password' type='password' margin='normal' variant='outlined' />
                <Button type='submit' variant='contained' color='primary' fullWidth sx={{marginTop: "1rem"}}>Login</Button>

                <Typography textAlign={'center'} m={"1rem"}>OR</Typography>
                <Button variant='contained' color='secondary' fullWidth sx={{marginTop: "1rem"}} onClick={toggleLogin}>Sign Up Instead </Button> 
              </form>  
            </>
          ) : (
            <>
              <Typography variant="h5">Sign Up</Typography>
              <form style={{
                width: "100%",
                marginTop: "1rem",
              }}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar sx={{
                  width: "10rem",
                  height: "10rem",
                  objectFit: "contain"
                }}
                />
                <IconButton>
                  <CameraAltIcon />
                  <VisuallyHiddenInput type="file" />
                </IconButton>

              </Stack>
              <TextField required fullWidth label='Name' margin='normal' variant='outlined' />
              <TextField required fullWidth label='UserName' margin='normal' variant='outlined' />
              <TextField required fullWidth label='Bio' margin='normal' variant='outlined' />
              <TextField required fullWidth label='password' type='password' margin='normal' variant='outlined' />
              <Button type='submit' variant='contained' color='primary' fullWidth sx={{marginTop: "1rem"}}>Sign Up</Button>

              <Typography textAlign={'center'} m= { "1rem"}>OR</Typography>  
              <Button variant='contained' color='secondary' fullWidth sx={{marginTop: "1rem"}} onClick={toggleLogin}> Login Instead </Button> 
              </form>
            </>
          )
        }
      </Paper>
    </Container>
  );
}

export default Login;