const {historicalData} = require('../utils/dummyDataGenerator')

module.exports.getData = (req, res) => {
    const result = historicalData
    return res.status(200).json(result);
  };
  