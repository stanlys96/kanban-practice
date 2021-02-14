const { Task } = require('../models/index');

async function authorize(req, res, next) {
  let id = +req.params.id;
  let UserId = +req.decoded.id;
  try {
    let task = await Task.findOne({ where: { id } });
    if (!task) {
      throw {
        name: 'CustomError',
        msg: 'ID not found!',
        status: 404
      }
    } else {
      if (task.UserId === UserId) {
        next();
      } else {
        throw {
          name: 'CustomError',
          msg: 'Not authorized!',
          status: 401
        }
      }
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  authorize
}