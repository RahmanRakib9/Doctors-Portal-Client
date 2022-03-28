import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';


const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
     const { name, time } = booking;

     const handleBookingSubmit = e => {
          alert('submitting')
          handleBookingClose();

          e.preventDefault();
     }

     const style = {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
     };

     return (
          <Modal
               open={openBooking}
               onClose={handleBookingClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
          >
               <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                         {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                         <TextField
                              sx={{ width: '90%', m: 1 }}
                              disabled
                              id="outlined-size-small"
                              defaultValue={time}
                              size="small"
                         />
                         <TextField
                              sx={{ width: '90%', m: 1 }}
                              id="outlined-size-small"
                              defaultValue='Your Name'
                              size="small"
                         />
                         <TextField
                              sx={{ width: '90%', m: 1 }}
                              id="outlined-size-small"
                              defaultValue='Your Email'
                              size="small"
                         />
                         <TextField
                              sx={{ width: '90%', m: 1 }}
                              id="outlined-size-small"
                              defaultValue='Your Phone Number'
                              size="small"
                         />
                         <TextField
                              disabled
                              sx={{ width: '90%', m: 1 }}
                              id="outlined-size-small"
                              defaultValue={date.toDateString()}
                              size="small"
                         />
                         <Button type='submit' variant="contained">Submit</Button>
                    </form>
               </Box>
          </Modal>
     );
};

export default BookingModal;