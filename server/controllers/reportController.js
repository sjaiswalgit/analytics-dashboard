

module.exports.getData = (req, res) => {

    const result={
      "timestamp": "2025-04-11T12:01:00Z",
      "active_users": 87,
      "page_views": 152,
      "avg_session_duration": 4.6
    }
    

    res.json({ result });
  };
  