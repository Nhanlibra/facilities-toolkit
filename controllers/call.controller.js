const Call = require('../models/call.model');

const addCall = async ({body}, res) => {
  Call.create(body)
      .then((data) => res.json(data))
      .catch((e) => res.status(500).json(e));
};

const getCalls = (req, res) => {
  Call.find({})
      .then((data) => res.json(data))
      .catch((e) => res.status(500).json(e));
};

const getCallsCount = (req, res) => {
  Call.count({})
      .then((data) => res.json(data));
};

module.exports = {addCall, getCalls, getCallsCount};
