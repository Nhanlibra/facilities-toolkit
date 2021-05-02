const Call = require('../../models/call.model');

const getCallsPerLane = async (req, res) => {
  // TODO: Get this from db
  const LANE_COUNT = 26;

  const labels = Array.from({length: LANE_COUNT}, (_, i) => i + 1);
  const data = Array(LANE_COUNT).fill(0);

  const laneTotals = await Call.aggregate([
    {'$group': {'_id': '$lane', 'count': {'$sum': 1}}},
  ]);

  laneTotals.forEach((lane) => data[(lane._id - 1)] = lane.count);

  res.json({
    labels,
    data,
  });
};

module.exports = {getCallsPerLane};
