import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking }) => {
     const { name, time, space } = booking;
     const [openBooking, setOpenBooking] = React.useState(false);
     const handleBookingOpen = () => setOpenBooking(true);
     const handleBookingClose = () => setOpenBooking(false);
     return (
          <>
               <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ py: 5 }}>
                         <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main', fontWeight: 600 }}>
                              {name}
                         </Typography>
                         <Typography variant="h6" gutterBottom component="div">
                              {time}
                         </Typography>
                         <Typography variant="caption" display="block" gutterBottom>
                              {space} SPACES AVAILABLE
                         </Typography>
                         <Button variant="contained" onClick={handleBookingOpen}>BOOK APPOINTMENT</Button>
                    </Paper>
               </Grid>
               <BookingModal openBooking={openBooking} handleBookingClose={handleBookingClose}></BookingModal>
          </>
     );
};

export default Booking;