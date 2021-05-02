const getCommonCalls = (req, res) => {
  res.json({
    labels: ['TS1', 'TS2', '01', '75'],
    data: [7, 10, 5, '1'],
  });
};

module.exports = {getCommonCalls};
