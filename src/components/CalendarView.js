import React from 'react';
import './CalendarView.js';

function CalendarView() {
  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-grid">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="day-box">
            {i + 1}
            {(i + 1 === 4 || i + 1 === 12) && <div className="appt-time">09:00</div>}
            {(i + 1 === 15) && <div className="appt-time">13:00</div>}
          </div>
        ))}
      </div>
      <div className="calendar-appointments">
        <div className="appointment-card">Dentist Appointment - 09:00 AM</div>
        <div className="appointment-card">Physiotherapy Appointment - 03:00 PM</div>
      </div>
    </div>
  );
}

export default CalendarView;