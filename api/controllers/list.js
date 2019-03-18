const List = require('../models/list');

exports.create = (req, res) => {
  const list = new List({
    userId: req.body.userId,
    listUrl: req.body.listUrl
  });

  list.save((err) => {
    if (err) return next(err);
    res.send('List created successfully!');
  });
};

exports.read = (req, res) => {
  List.findById(req.params.id, (err, list) => {
    if (err) return next(err);
    res.send(list);
  });
};

exports.update = (req, res) => {
  List.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, list) => {
    if (err) return next(err);
    res.send(list);
  });
};

exports.delete = (req, res) => {
  List.findByIdAndDelete(req.params.id, (err) => {
    if (err) return next(err);
    res.send('List deleted successfully!');
  });
};
