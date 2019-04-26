const mongoose = require('mongoose');
const ListSchema = require('./list');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, maxlength: 150, unique: true },
  hash: { type: String, required: true, maxlength: 150 },
  email: { type: String, required: true, unique: true }
});

UserSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', UserSchema);
