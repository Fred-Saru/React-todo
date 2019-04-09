const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: { type: String, maxlength: 150 },
  lastname: { type: String, maxlength: 150 },
  username: { type: String, required: true, maxlength: 150, unique: true },
  hash: { type: String, required: true, maxlength: 150 },
  email: { type: String, required: true, unique: true }
});

UserSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', UserSchema);
