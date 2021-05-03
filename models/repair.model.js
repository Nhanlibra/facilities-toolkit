const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const repairSchema = new Schema({
  logged: {
    type: Date,
    default: Date.now,
  },
  loggedBy: {
    type: String,
    required: 'Logged by initials are required',
  },
  lane: {
    type: Number,
    required: 'Lane number is required',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    required: 'Priority is required',
  },
  description: {
    type: String,
    required: 'Description is required',
  },
  status: {
    type: String,
    enum: ['pending', 'on hold', 'completed'],
    required: 'Status is required',
  },
  repairedBy: {
    type: String,
  },
  dateRepaired: {
    type: Date,
  },
});

const Repair = mongoose.model('Repairs', repairSchema);
module.exports = Repair;
