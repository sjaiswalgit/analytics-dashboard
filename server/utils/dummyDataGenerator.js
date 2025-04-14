const {getIO} = require('../socket/socket')



let historicalData = [];

// Initialize historical data
function initializeData() {
  const io = getIO();
  const now = Date.now(); 

  for (let i = 6; i >= 0; i--) {
    const timestamp = new Date(now - i * 5000).toISOString(); // Spread timestamps across the past 35s
    const active_users = getRandomInt(20, 99);
    const page_views = active_users * getRandomInt(1, 3);
    const avg_session_duration = getRandomFloat(1.5, 6.5, 1);

    historicalData.push({
      timestamp,
      active_users,
      page_views,
      avg_session_duration,
    });
  }

  // Start generating new data every 5 seconds
  setInterval(() => generateDummyData(io), 5000);
}

// Generate a new data point and update the array
function generateDummyData(io) {
  const timestamp = new Date().toISOString();
  const active_users = getRandomInt(20, 99);
  const page_views = active_users * getRandomInt(1, 3);
  const avg_session_duration = getRandomFloat(1.5, 6.5, 1);

  const newData = {
    timestamp,
    active_users,
    page_views,
    avg_session_duration,
  };

  historicalData.shift(); // Remove the oldest entry
  historicalData.push(newData); // Add the new one

  io.emit("updateDashboard",newData)



  return newData;
}

// Utility function for integer in [min, max]
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Utility function for float in [min, max] with fixed decimal places
function getRandomFloat(min, max, decimals = 1) {
  const factor = Math.pow(10, decimals);
  return Math.round((Math.random() * (max - min) + min) * factor) / factor;
}



module.exports = {historicalData,initializeData}
