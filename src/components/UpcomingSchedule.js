import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.js';

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      <div className="day-group">
        <h4>On Thursday</h4>
        <SimpleAppointmentCard title="Ophthalmologist" time="10:30 AM" />
        <SimpleAppointmentCard title="Cardiologist" time="02:00 PM" />
      </div>
      <div className="day-group">
        <h4>On Saturday</h4>
        <SimpleAppointmentCard title="Neurologist" time="11:00 AM" />
      </div>
    </div>
  );
}

export default UpcomingSchedule;