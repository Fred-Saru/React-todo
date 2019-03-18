const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaType.ObjectId;

const UserSchema = new Schema({
  userId: { type: ObjectId, required: true },
  username: { type: String, required: true, maxlength: 150 },
  password: { type: String, required: true, maxlength: 150 },
  verificationCode: { type: String, maxlength: 150 },
  verified: { type: Boolean }
});

module.exports = mongoose.model('User', UserSchema);
