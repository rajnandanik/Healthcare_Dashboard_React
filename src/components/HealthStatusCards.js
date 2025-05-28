import React from 'react';
import './HealthStatusCards.js';

function HealthStatusCards() {
  return (
    <div className="health-cards">
      <div className="card issue">Lungs - Last Checked: 22 May</div>
      <div className="card healthy">Teeth - Last Checked: 20 May</div>
      <div className="card healthy">Bone - Last Checked: 19 May</div>
    </div>
  );
}

export default HealthStatusCards;