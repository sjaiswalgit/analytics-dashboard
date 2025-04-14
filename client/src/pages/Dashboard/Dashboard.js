import { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import Card from '../../components/Card/Card';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import LineChartCard from '../../components/LineChart/LineChart';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [currentMetrics, setCurrentMetrics] = useState({
    active_users: 0,
    page_views: 0,
    avg_session_duration: 0
  });
  
  // Sample data for demonstration
  const sampleData = [
    { date: 'Jan', page_views: 400 },
    { date: 'Feb', page_views: 300 },
    { date: 'Mar', page_views: 500 },
    { date: 'Apr', page_views: 280 },
    { date: 'May', page_views: 590 },
    { date: 'Jun', page_views: 320 }
  ];
  
  // Initialize with sample data
  useEffect(() => {
    setData(sampleData);
    setCurrentMetrics({
      active_users: 843,
      page_views: 2467,
      avg_session_duration: 124
    });
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.dashboard}>
        <h1 className={styles.header}>Analytics Dashboard</h1>
        
        <div className={styles.flex}>
          {/* Active Users Card */}
          <Card 
            title="Active Users" 
            description="Total users this month" 
            counter={currentMetrics.active_users} 
            growth={12.5} 
          />
          
          {/* Progress Bar */}
          <ProgressBar 
            title="Session Duration" 
            data={currentMetrics.avg_session_duration} 
            percentage={65} 
            unit="sec" 
          />
        </div>
        
        {/* Line Chart */}
        <LineChartCard 
          title="Page Views Trends" 
          data={data} 
        />
      </div>
    </div>
  );
}