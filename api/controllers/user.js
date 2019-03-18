const User = require('../models/user');

exports.create = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    verificationCode: 0
  });

  user.save((err) => {
    if (err) return next(err);
    res.send('User created succesfully!');
  });
};

exports.read = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return next(err);
    res.send(user);
  });
};

exports.update = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
    if (err) return next(err);
    res.send(user);
  });
};

exports.delete = (req, res) => {
  User.findByIdAndDelete(req.params.id, (err) => {
    if (err) return next(err);
    res.send('User deleted successfully!');
  });
};
