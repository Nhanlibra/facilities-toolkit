const Call = require('../../models/call.model');

const getCommonCalls = async (req, res) => {
  const callTotals = await Call.aggregate([
    {'$group': {'_id': '$code', 'count': {'$sum': 1}}},
    {'$sort': {'count': -1}},
  ]);

  const labels = [];
  const data = [];

  callTotals.forEach((call) => {
    labels.push(call._id);
    data.push(call.count);
  });

  res.json({
    labels,
    data,
  });
};

module.exports = {getCommonCalls};
