import React from 'react';
import './AnatomySection.js';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img src="https://via.placeholder.com/150x300" alt="Human Body" className="anatomy-image" />
      <ul className="health-indicators">
        <li className="healthy">Healthy Heart</li>
        <li className="issue">Lungs</li>
        <li className="healthy">Teeth</li>
        <li className="healthy">Bone</li>
      </ul>
    </div>
  );
}

export default AnatomySection;