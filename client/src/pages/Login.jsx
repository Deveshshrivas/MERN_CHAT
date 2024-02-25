import React, { useState } from 'react';
import { TextField, Container, Paper, Typography, Button} from '@mui/material';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin(false);

  return (
    <Container component="main" maxWidth="xs">
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
            <span>register</span>
          )
        }
      </Paper>
    </Container>
  );
}

export default Login;