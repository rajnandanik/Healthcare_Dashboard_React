import React from 'react';
import './DashboardMainContent.js';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

function DashboardMainContent() {
  return (
    <main className="dashboard-content">
      <section className="overview-section">
        <AnatomySection />
        <HealthStatusCards />
      </section>
      <CalendarView />
      <UpcomingSchedule />
      <ActivityFeed />
    </main>
  );
}

export default DashboardMainContent;