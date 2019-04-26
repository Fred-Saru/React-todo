const List = require('../models/list');

exports.getByUserId = async (userId) => {
  return await List.find({ userId: { $eq: userId } });
};

exports.create = async (params) => {
  const list = new List(params);

  await List.updateMany(
    { userId: { $eq: params.userId } },
    { $inc: { rank: 1 } }
  );
  await list.save();

  return list;
};

exports.update = async (list) => {
  const oldList = List.findById(list._id);
  let minRnk = 0,
    maxRnk = 0,
    deltaRnk = 0;

  if (oldList.rank !== list.rank) {
    if (oldList.rank < list.rank) {
      minRnk = oldList.rank;
      maxRnk = list.rank;
      deltaRnk = -1;
    } else {
      minRnk = listrank;
      maxRnk = oldList.rank;
      deltaRnk = 1;
    }
  }

  await List.updateMany(
    { userId: { $eq: params.userId }, rank: { $gt: minRnk, $lt: maxRnk } },
    { $inc: { rank: deltaRnk } }
  );
  await list.save();
  return list;
};

exports.remove = async (id) => {
  const oldList = List.findById(list._id);

  await List.updateMany(
    { userId: { $eq: params.userId }, rank: { $gt: oldList.rank } },
    { $inc: { rank: -1 } }
  );
  await List.findByIdAndRemove(id);
  return user;
};
