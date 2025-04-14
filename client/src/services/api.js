import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL || ""

const jsonApi = axios.create({
  baseURL: `${baseURL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example endpoint
export const fetchDashboardData = () => jsonApi.get('/report/dashboard');


export default jsonApi;
