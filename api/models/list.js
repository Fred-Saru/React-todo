const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const ListSchema = new Schema({
  userId: { type: ObjectId, ref: 'User' },
  listUrl: { type: String, maxlength: 250 }
});

module.exports = mongoose.model('List', ListSchema);
