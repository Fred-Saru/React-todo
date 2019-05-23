const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const TaskSchema = new Schema({
  content: { type: String },
  isDone: { type: Boolean },
  rank: { type: Number },
  listId: { type: ObjectId, ref: 'List' }
});

module.exports = mongoose.model('Task', TaskSchema);
