const getCallsPerLane = (req, res) => {
  res.json({
    labels: [
      1, 2, 3, 4, 5, 6,
      7, 8, 9, 10, 11, 12, 13, 14,
      15, 16, 17, 18, 19, 20, 21, 22,
      23, 24, 25, 26,
    ],
    data: [
      0, 1, 0, 5,
      3, 1, 5, 0,
      0, 2, 4, 2,
      1, 2, 4, 3,
      6, 8, 2, 1,
      2, 3, 4, 3,
      0, 1],
  });
};

module.exports = {getCallsPerLane};
