import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import ClicksChart from '../components/dashboard/ClicksChart';
import ClicksList from '../components/dashboard/ClicksList';

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard title="Clicks" value="1,031" change="-26%" changeType="decrease" />
        <StatCard title="Impressions" value="54,923" change="+234%" changeType="increase" />
        <StatCard title="CTR" value="1.88%" change="-78%" changeType="decrease" />
        <StatCard title="CPM" value="$5.64" change="-68%" changeType="decrease" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ClicksChart />
        <ClicksList />
      </div>
    </div>
  );
};

export default Dashboard;