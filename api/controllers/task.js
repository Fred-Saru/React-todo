const Task = require('../models/task');

exports.create = async (params) => {
    const task = new Task(params);
    await task.save();
    return task;
};

exports.update = async (params) => {
    const task = Task.findById(params._id);
    
    Object.assign(task, params);

    await task.save();
    return task;
};

exports.remove = async (taskId) => {
    await Task.findByIdAndRemove(taskId);
};

exports.getByListId = async (listId) => {
    return await Task.find({ listId: { $eq: listId } });
};