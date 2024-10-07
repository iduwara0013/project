import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import './Dashboard.css';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const Dashboard = ({ isSidebarOpen }) => {
  const totalPatientsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Patients',
        data: [30, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4
      },
    ],
  };

  const patientsInData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'OPD',
        data: [30, 40, 25, 50, 70, 65, 80],
        backgroundColor: '#3f51b5',
      },
      {
        label: 'ICU',
        data: [20, 30, 45, 60, 40, 55, 60],
        backgroundColor: '#ff5722',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart Title',
      },
    },
  };

  return (
    <div className={`dashboard ${isSidebarOpen ? '' : 'full-screen'}`}>
      <div className="dashboard-cards">
        <div className="card doctor-card">87 Doctors</div>
        <div className="card patient-card">1002 Patients</div>
        <div className="card attended-card">352 Attended</div>
        <div className="card pending-card">650 Pending</div>
      </div>
      <div className="charts">
        <div className="chart total-patients">
          <Line data={totalPatientsData} options={{...options, title: { display: false }}} />
        </div>
        <div className="chart patients-in">
          <Bar data={patientsInData} options={{...options, title: { display: false }}} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
