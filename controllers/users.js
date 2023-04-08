const { User } = require("../models");

const {
  createError,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
} = require("../helpers/error_helper");

const addUser = async (req, res, next) => {
  const props = req.body.user;

  const { username, password, role_id } = props;
  const paramsUser = { username, password, role_id };
  await User.create(paramsUser)
    .then(async (user) => {
      await res.json({
        ok: true,
        message: "User created",
        user,
      });
    })
    .catch((error) =>
      next(
        createError({
          status: FORBIDDEN,
          message: error,
          ok: false,
        })
      )
    );
};

module.exports = {
  addUser,
};
