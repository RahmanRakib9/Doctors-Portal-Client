import { Alert, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';
import Typography from '@mui/material/Typography';


const bookings = [
     {
          id: 1,
          name: 'Oral Surgery',
          time: '7pm -8 pm',
          space: 10
     },
     {
          id: 2,
          name: 'Oral Surgery',
          time: '7pm -8 pm',
          space: 15
     },
     {
          id: 3,
          name: 'Oral Surgery',
          time: '7pm -8 pm',
          space: 18
     },
     {
          id: 4,
          name: 'Oral Surgery',
          time: '7pm -8 pm',
          space: 20
     },
     {
          id: 5,
          name: 'Oral Surgery',
          time: '7pm -8 pm',
          space: 7
     },
     {
          id: 6,
          name: 'Oral Surgery',
          time: '7pm -8 pm',
          space: 4
     },
]


const AvailableAppointments = ({ date }) => {
     const [bookingSuccess, setBookingSuccess] = useState(false)
     return (
          <Container>
               <Typography variant='h4' component='div' sx={{ color: 'info.main', mb: 3 }}>Appointment Available on {date.toDateString()}</Typography>
               {bookingSuccess && <Alert severity="success">Appointment Booked Successfully</Alert>}
               <Grid container spacing={2}>
                    {
                         bookings.map(booking => <Booking
                              key={booking.id}
                              booking={booking}
                              date={date}
                              setBookingSuccess={setBookingSuccess}
                         ></Booking>)
                    }
               </Grid>
          </Container>
     );
};

export default AvailableAppointments;