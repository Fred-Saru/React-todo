const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../configs/jwt.json');

exports.register = async (params) => {
  if (await User.findOne({ username: params.username })) {
    throw `Username ${params.username} is already taken.`;
  }

  const user = new User(params);

  if (params.password) {
    user.hash = bcrypt.hashSync(params.password, 10);
  }

  await user.save();
};

exports.authenticate = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.hash)) {
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id }, config.secret);
    return {
      ...userWithoutHash,
      token
    };
  }
};

exports.getById = async (id) => {
  return await User.findById(id).select('-hash');
};

exports.getAll = async () => {
  return await User.find().select('-hash');
};

exports.update = async (id, params) => {
  const user = await User.findById(id);

  if (!user) {
    throw `User not found.`;
  }

  if (
    user.username !== params.username &&
    (await User.findOne({ username: params.username }))
  ) {
    throw `Username ${params.username} is already taken.`;
  }

  if (params.password) {
    user.hash = bcrypt.hashSync(params.password, 10);
  }

  Object.assign(user, params);

  await user.save();
  return user;
};

exports.remove = async (id) => {
  await User.findByIdAndRemove(id);
};
