import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png'
import { Typography, Button } from '@mui/material';

const appointmentBanner = {
     background: `url(${bg})`,
     backgroundColor: 'rgba(45, 58, 74, 0.9)',
     backgroundBlendMode: 'darken, luminosity',
     marginTop: 175
}

const AppointmentBanner = () => {
     return (
          <Box sx={{ flexGrow: 1 }} style={appointmentBanner}>
               <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                         <img src={doctor} alt="" style={{ width: 400, marginTop: '-110px' }} />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                         <Box>
                              <Typography variant='h6' style={{ color: '#5CE7ED' }} sx={{ mb: 5 }}>
                                   Appointment
                              </Typography>
                              <Typography variant='h4' style={{ color: 'white' }}>
                                   Make an Appointment Today
                              </Typography>
                              <Typography variant='h6' style={{ color: 'white', fontSize: 14, fontWeight: 300 }} sx={{ my: 5 }}>
                                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi earum fuga quod ipsa quis officiis exercitationem minus vel nemo? Aliquam.
                              </Typography>
                              <Button variant='contained' style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                         </Box>
                    </Grid>
               </Grid>
          </Box>
     );
};

export default AppointmentBanner;