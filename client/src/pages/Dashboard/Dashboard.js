import { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import Card from '../../components/Card/Card';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import LineChartCard from '../../components/LineChart/LineChart';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { fetchDashboardData } from '../../services/api';
import socket from '../../socket/socket';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [currentMetrics, setCurrentMetrics] = useState({
    active_users: 0,
    page_views: 0,
    avg_session_duration: 0
  });


  // Initialize with sample data
  useEffect(() => {
    fetchDashboardData().then((res) => {
      const formattedData = res.data.map(item => ({
        ...item,
        date: new Date(item.timestamp).toLocaleTimeString('en-US', {
          minute: '2-digit',
          second: '2-digit',

        })
      }));

      setData(formattedData);
    }).catch((err) => {
      console.log(err)
    })


    socket.on('updateDashboard', (data) => {
      console.log(data);

      data["date"] = new Date(data?.timestamp).toLocaleTimeString('en-US', {
        minute: '2-digit',
        second: '2-digit',
      });

      setData((prev) => {
        const updated = [...prev, data]; // push to end
        if (updated.length > 7) {
          updated.shift(); // remove first item if limit exceeded
        }
        return updated;
      });
    });


    return () => {
      socket.off('receiveMessage');
    };

  }, []);




  useEffect(() => {
    if (data.length > 0) {
      setCurrentMetrics(data[data.length - 1])
    }

  }, [data])










  return (
    <div className={styles.pageContainer}>
      <div className={styles.dashboard}>
        <h1 className={styles.header}>Analytics Dashboard</h1>

        <div className={styles.flex}>
          {/* Active Users Card */}
          <ErrorBoundary fallback={<p>Oops! Something broke. Please try again later.</p>}>
            <Card
              title="Active Users"
              counter={currentMetrics.active_users}
              growth={12.5}
            />
          </ErrorBoundary>

          {/* Progress Bar */}
          <ErrorBoundary fallback={<p>Oops! Something broke. Please try again later.</p>}>
            <ProgressBar
              title="Session Duration"
              data={currentMetrics.avg_session_duration}
              percentage={65}
              unit="sec"
            />
          </ErrorBoundary>
        </div>

        {/* Line Chart */}
        <ErrorBoundary fallback={<p>Oops! Something broke. Please try again later.</p>}>
          <LineChartCard
            title="Page Views Trends"
            data={data}
          />
        </ErrorBoundary>
      </div>
    </div>
  );
}