import React from 'react';

const AvailableAppointments = ({ date, setDate }) => {
     return (
          <div>
               <h2>Appointment Available {date.toDateString()}</h2>
          </div>
     );
};

export default AvailableAppointments;