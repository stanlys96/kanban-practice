const { User } = require('../models/index');
const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class userController {
  static async register(req, res, next) {
    let { full_name, email, password } = req.body;
    let newUser = await User.create({ full_name, email, password });
    res.status(201).json({
      id: newUser.id,
      email: newUser.email
    })
  }

  static async login(req, res, next) {
    let { email, password } = req.body;
    try {
      let user = await User.findOne({ where: { email } });
      if (!user) throw {
        name: 'CustomError',
        msg: 'Email or password is incorrect!',
        status: 404
      }
      let comparedPassword = comparePassword(password, user.password);
      if (!comparedPassword) throw {
        name: 'CustomError',
        msg: 'Email or password is incorrect!',
        status: 404
      }
      let access_token = generateToken({
        id: user.id,
        email: user.email
      });
      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = userController;