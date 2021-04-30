const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const callSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  lane: {
    type: Number,
    required: 'Call lane number is required',
  },
  code: {
    type: String,
    required: 'Call code is required',
  },
  description: String,
  tech: {
    type: String,
    required: 'Call tech is required',
  },
});

const Call = mongoose.model('Calls', callSchema);
module.exports = Call;
