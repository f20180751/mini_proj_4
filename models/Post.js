const mongoose = require('mongoose');
//now we create a scheema of the model we are making
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Posts', PostSchema);
