const mongoose = require('mongoose');

const currentUserSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('CurrentUser', currentUserSchema);