import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';

const bannerBg = {
     background: `url(${bg})`,

}

const verticalCenter = {
     display: 'flex',
     alignItems: 'center',
     height: 400
}

const Banner = () => {
     return (
          <Container sx={{ flexGrow: 1 }} style={bannerBg}>
               <Grid container spacing={2} >
                    <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: 'left' }}>
                         <Box>
                              <Typography variant='h3'>
                                   Your New Smile <br /> Start Here
                              </Typography>
                              <Typography variant='h6' sx={{ my: 3, color: 'gray', fontWeight: 300, fontSize: 13 }}>
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis rerum ullam unde assumenda repellat est labore nobis animi, nisi enim Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ducimus aspernatur dolor neque nesciunt! Debitis natus cupiditate commodi ipsam hic.
                              </Typography>

                              <Button variant='contained' style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                         </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                         <img src={chair} alt="" style={{ width: '350px ' }} />
                    </Grid>
               </Grid>
          </Container>
     );
};

export default Banner;