const List = require('../models/list');

exports.create = async (params) => {
  const list = new List(params);
  await list.save();
};

exports.getById = async (id) => {
  return await List.findById(id);
};

exports.update = async (id, params) => {
  const list = await List.findById(id);

  if (!list) {
    throw 'List not found.';
  }

  Object.assign(list, params);

  await list.save();
  return list;
};

exports.delete = async (id) => {
  await List.findByIdAndRemove(id);
};
