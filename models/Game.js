const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  name: {type: String},
  date: {type: Date},
  type: {type: String},
  invited: [String],
  location: {type: String},
  host: {type: String},
  maxPlayers: {type: Number},
  players: {type: [String], optional: true},
  costPerPlayer: {type: Number, default: 0},
  active: {type: Boolean, default: true}
});

module.exports = mongoose.model('Game', GameSchema);
