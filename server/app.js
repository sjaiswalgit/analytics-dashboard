const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();



const origins = []

origins.push('http://localhost:3000')   //setting cors to for devlepment of client side
const corsOptionsDelegate = function (req, callback) {
  const corsOptions = { optionsSuccessStatus: 200 };
  corsOptions.origin = origins.indexOf(req.header('Origin')) !== -1;
  callback(null, corsOptions)
}
app.use(cors(corsOptionsDelegate)); // handling cors




app.use(express.json());

// Routes
const apiRoutes = require('./routes/reportRoute');
app.use('/api/report/', apiRoutes);

// Serve React static build
const clientBuildPath = path.join(__dirname, '../client/build');
app.use(express.static(clientBuildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

module.exports = app;
