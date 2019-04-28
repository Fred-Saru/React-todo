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

exports.update = async (params) => {
  const list = await List.findById(params._id);
  let minRnk = 0,
    maxRnk = 0,
    deltaRnk = 0;

  if (list.rank !== params.rank) {
    if (list.rank < params.rank) {
      minRnk = list.rank;
      maxRnk = params.rank;
      deltaRnk = -1;
    } else {
      minRnk = params.rank;
      maxRnk = list.rank;
      deltaRnk = 1;
    }
  }

  await List.updateMany(
    {
      userId: list.userId,
      rank: { $gte: minRnk, $lte: maxRnk }
    },
    { $inc: { rank: deltaRnk } }
  );

  Object.assign(list, params);

  await list.save();
  return list;
};

exports.remove = async (listId) => {
  const oldList = await List.findById(listId);

  await List.updateMany(
    { userId: { $eq: oldList.userId }, rank: { $gt: oldList.rank } },
    { $inc: { rank: -1 } }
  );
  await List.findByIdAndRemove(listId);
};
