const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaType.ObjectId;

const ListItemSchema = new Schema({
  listItemId: { type: ObjectId, required: true },
  listId: { type: ObjectId, ref: 'List' },
  content: { type: String },
  isDone: { type: Boolean },
  position: { type: Number },
  color: { type: String }
});

module.exports = mongoose.model('ListItem', ListItemSchema);
