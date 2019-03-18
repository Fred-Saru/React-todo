const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaType.ObjectId;

const ListSchema = new Schema({
  listId: { type: ObjectId, required: true },
  userId: { type: ObjectId, ref: 'User' },
  listUrl: { type: String, maxlength: 250 }
});

module.exports = mongoose.model('List', ListSchema);
