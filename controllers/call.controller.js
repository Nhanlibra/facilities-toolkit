const Call = require('../models/call.model');

const addCall = async ({body}, res) => {
  Call.create(body)
      .then((data) => res.json(data))
      .catch((e) => res.status(500).json(e));
};

const getCalls = (req, res) => {
  Call.find({})
      .sort({date: -1})
      .then((data) => res.json(data))
      .catch((e) => res.status(500).json(e));
};

const getCallsCount = (req, res) => {
  Call.countDocuments({})
      .then((data) => res.json(data));
};

module.exports = {addCall, getCalls, getCallsCount};
