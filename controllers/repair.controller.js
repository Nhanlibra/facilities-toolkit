const Repair = require('../models/repair.model');

const addRepair = ({body}, res) => {
  Repair.create(body)
      .then((data) => res.json(data))
      .catch((e) => res.status(500).json(e));
};

const getRepairs = (req, res) => {
  let find = {};
  const status = req.params.status;

  if (status) {
    if (status === 'active') {
      find = {'status': {'$ne': 'completed'}};
    } else {
      find = {'status': status};
    }
  }

  Repair.find(find)
      .sort({logged: -1})
      .then((data) => res.json(data))
      .catch((e) => res.status(500).json(e));
};


const getRepairsCount = (req, res) => {
  Repair.find({'status': {'$ne': 'completed'}})
      .countDocuments()
      .then((data) => res.json(data))
      .catch((e) => res.status(500).json(e));
};

const editRepair = (req, res) => {
  Repair.findByIdAndUpdate(req.params.id, req.body)
      .then((data) => res.json(data))
      .catch((e) => res.status(500).json(e));
};

module.exports = {addRepair, getRepairs, getRepairsCount, editRepair};
