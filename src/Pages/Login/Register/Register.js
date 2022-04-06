import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth';

const Register = () => {
     const [loginData, setLoginData] = useState({});

     const { user, registerUser, isLoading, authError } = useAuth();

     //for redirect user destination
     const navigate = useNavigate();
     const location = useLocation();

     const handleOnBlur = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newLoginData = { ...loginData };
          newLoginData[field] = value;
          setLoginData(newLoginData);
     }


     const handleRegisterSubmit = e => {

          if (loginData.password !== loginData.password2) {
               alert('Your Password Did Not Match')
               return
          }
          registerUser(loginData.name, loginData.email, loginData.password, location, navigate)
          e.preventDefault();
     }
     return (
          <Container>
               <Grid container spacing={3}>
                    <Grid item xs={12} md={6} sx={{ mt: 10 }}>
                         <Typography variant="body1" gutterBottom>Register</Typography>
                         {!isLoading && <form onSubmit={handleRegisterSubmit}>
                              <TextField
                                   sx={{ width: 1, m: 1 }}
                                   id="standard-basic"
                                   type='text'
                                   label="Your Name"
                                   variant="standard"
                                   name='name'
                                   onBlur={handleOnBlur}
                              />
                              <TextField
                                   sx={{ width: 1, m: 1 }}
                                   id="standard-basic"
                                   type='email'
                                   label="Your Email"
                                   variant="standard"
                                   name='email'
                                   onBlur={handleOnBlur}
                              />
                              <TextField
                                   sx={{ width: 1, m: 1 }}
                                   id="standard-password-input"
                                   label="Your Password"
                                   type="password"
                                   autoComplete="current-password"
                                   variant="standard"
                                   name='password'
                                   onBlur={handleOnBlur}
                              />
                              <TextField
                                   sx={{ width: 1, m: 1 }}
                                   id="standard-password-input"
                                   label="Retype Your Password"
                                   type="password"
                                   autoComplete="current-password"
                                   variant="standard"
                                   name='password2'
                                   onBlur={handleOnBlur}
                              />
                              <Button variant='contained' type='submit' sx={{ width: 1, m: 1 }}>REGISTER</Button>
                              <Link
                                   style={{ textDecoration: 'none' }}
                                   to='/login'>
                                   <Button variant="text">Already Registered?Please Login</Button>
                              </Link>
                         </form>}
                         {isLoading && <CircularProgress />}

                         {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                         {authError && <Alert severity="error">{authError}</Alert>}

                    </Grid>
                    <Grid item xs={12} md={6}>
                         <img style={{ width: '100%' }} src={loginImg} alt="" />
                    </Grid>
               </Grid>
          </Container>
     );
};

export default Register;