import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth'


const Login = () => {
     const [loginData, setLoginData] = useState({});
     const { user, authError, loginUser, isLoading } = useAuth();

     //for redirect user destination
     const navigate = useNavigate();
     const location = useLocation();


     const handleOnchange = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newLoginData = { ...loginData };
          newLoginData[field] = value;
          setLoginData(newLoginData);
     }

     const handleLoginSubmit = e => {
          loginUser(loginData.email, loginData.password, location, navigate)
          e.preventDefault();
     }
     return (
          <Container>
               <Grid container spacing={3}>
                    <Grid item xs={12} md={6} sx={{ mt: 10 }}>
                         <Typography variant="body1" gutterBottom>Login</Typography>
                         <form onSubmit={handleLoginSubmit}>
                              <TextField
                                   sx={{ width: 1, m: 1 }}
                                   id="standard-basic"
                                   label="Your Email"
                                   variant="standard"
                                   name='email'
                                   onChange={handleOnchange}
                              />
                              <TextField
                                   sx={{ width: 1, m: 1 }}
                                   id="standard-password-input"
                                   label="Your Password"
                                   type="password"
                                   autoComplete="current-password"
                                   variant="standard"
                                   name='password'
                                   onChange={handleOnchange}
                              />
                              <Button variant='contained' type='submit' sx={{ width: 1, m: 1 }}>Login</Button>
                              <Link
                                   style={{ textDecoration: 'none' }}
                                   to='/register'>
                                   <Button variant="text">New User?Please Register</Button>
                              </Link>
                         </form>

                         {isLoading && <CircularProgress />}

                         {user?.email && <Alert severity="success">User Login Successfully</Alert>}
                         {authError && <Alert severity="error">{authError}</Alert>}

                    </Grid>
                    <Grid item xs={12} md={6}>
                         <img style={{ width: '100%' }} src={loginImg} alt="" />
                    </Grid>
               </Grid>
          </Container>
     );
};

export default Login;