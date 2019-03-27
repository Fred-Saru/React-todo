const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const ListItemSchema = new Schema({
  listId: { type: ObjectId, ref: 'List' },
  content: { type: String },
  isDone: { type: Boolean },
  position: { type: Number },
  color: { type: String }
});

module.exports = mongoose.model('ListItem', ListItemSchema);
