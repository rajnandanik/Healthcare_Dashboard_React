import React from 'react';
import './ActivityFeed.js';

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments on this week</p>
      <div className="bar-chart">
        {[50, 80, 30, 60, 40].map((height, i) => (
          <div key={i} className="bar" style={{ height: `${height}px` }}></div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;