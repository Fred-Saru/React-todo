const ListItem = require('../models/listItem');

exports.create = async (params) => {
  const listItem = new ListItem(params);
  await listItem.save();
};

exports.getById = async (id) => {
  return await ListItem.findById(id);
};

exports.update = async (id, params) => {
  const listItem = await ListItem.findById(id);

  if (!listItem) {
    throw 'List item not found';
  }

  Object.assign(listItem, params);

  await listItem.save();
  return listItem;
};

exports.delete = async (id) => {
  await ListItem.findByIdAndRemove(id);
};
