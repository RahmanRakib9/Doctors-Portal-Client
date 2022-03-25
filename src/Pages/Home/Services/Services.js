import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import Typography from '@mui/material/Typography';



const services = [
     {
          name: 'Fluoride Treatment',
          description: 'The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it.The Auto-layout makes the items equitably share the available space. That also means',
          img: fluoride,
          id: 0
     },
     {
          name: 'Fluoride Treatment',
          description: 'The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it.The Auto-layout makes the items equitably share the available space. That also means',
          img: fluoride,
          id: 1
     },
     {
          name: 'Fluoride Treatment',
          description: 'The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it.The Auto-layout makes the items equitably share the available space. That also means',
          img: fluoride,
          id: 2
     }
]


const Services = () => {
     return (
          <Box sx={{ flexGrow: 1 }}>
               <Container>
                    <Typography variant="h6" sx={{ fontWeight: 400,color:'success.main',m:2 }} component="div">
                         OUR SERVICES
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 600,m:5 }} component="div">
                         Services We Provide
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                         {
                              services.map(service => <Service service={service} key={service.id}></Service>)
                         }
                    </Grid>
               </Container>
          </Box>
     );
};

export default Services;

