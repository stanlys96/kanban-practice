const { Task, User } = require('../models/index');

class taskController {
  static async addTask(req, res, next) {
    let { title, category } = req.body;
    let UserId = req.decoded.id;
    try {
      let newTask = await Task.create({ title, category, UserId });
      res.status(201).json({
        id: newTask.id,
        title: newTask.title,
        category: newTask.category
      });
    } catch (err) {
      next(err);
    }
  }

  static async getTasks(req, res, next) {
    try {
      let tasks = await Task.findAll({ order: [['id', 'ASC']], include: [User] });
      let output = [];
      tasks.forEach(task => {
        output.push({
          id: task.id,
          title: task.title,
          category: task.category,
          createdAt: task.createdAt,
          userEmail: task.User.email
        })
      })
      res.status(200).json(output);
    } catch (err) {
      next(err);
    }
  }

  static async editTask(req, res, next) {
    let id = +req.params.id;
    let { title, category } = req.body;
    try {
      let updatedTask = await Task.update({ title, category }, { where: { id }, returning: true });
      if (updatedTask[0] !== 0) {
        res.status(200).json({
          id: updatedTask[1][0].id,
          title: updatedTask[1][0].title,
          category: updatedTask[1][0].category
        });
      } else {
        throw {
          name: 'CustomError',
          msg: 'ID not found!',
          status: 404
        }
      }
    } catch (err) {
      next(err);
    }
  }

  static async deleteTask(req, res, next) {
    let id = +req.params.id;
    try {
      let task = await Task.findByPk(id);
      if (!task) throw {
        name: 'CustomError',
        msg: 'ID not found!',
        status: 404
      }
      Task
        .destroy({ where: { id } })
        .then(() => {
          res.status(200).json({
            deletedTask: {
              id: task.id,
              title: task.title,
              category: task.category
            },
            message: 'Successfully deleted task!'
          });
        })
        .catch(err => {
          next(err);
        })
    } catch (err) {
      next(err);
    }
  }
}

module.exports = taskController;