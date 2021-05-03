const Repair = require('../models/repair.model');

const addRepair = ({body}, res) => {
  Repair.create(body)
      .then((data) => res.json(data))
      .catch((e) => res.status(500).json(e));
};

const getRepairs = (req, res) => {
  Repair.find({})
      .sort({logged: -1})
      .then((date) => res.json(data))
      .catch((e) => res.status(500).json(e));
};


module.exports = {addRepair, getRepairs};
