const ListItem = require('../models/listItem');

exports.create = (req, res) => {
  const listItem = new ListItem({
    listId: req.body.listId,
    content: req.body.content,
    isDone: req.body.isDone,
    position: req.body.position,
    color: req.body.color
  });

  listItem.save((err) => {
    if (err) return next(err);
    res.send('List item created successfully!');
  });
};

exports.read = (req, res) => {
  ListItem.findById(req.params.id, (err, listItem) => {
    if (err) return next(err);
    res.send(listItem);
  });
};

exports.update = (req, res) => {
  ListItem.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, listItem) => {
      if (err) return next(err);
      res.send(listItem);
    }
  );
};

exports.delete = (req, res) => {
  ListItem.findByIdAndDelete(req.params.id, (err) => {
    if (err) return next(err);
    res.send('List item successfully deleted!');
  });
};
