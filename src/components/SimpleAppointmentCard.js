import React from 'react';
import './SimpleAppointmentCard.js';
import { FaStethoscope } from 'react-icons/fa';

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="appointment-card-simple">
      <FaStethoscope className="icon" />
      <div>
        <p>{title}</p>
        <span>{time}</span>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;