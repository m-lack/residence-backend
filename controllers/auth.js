/*const knex = require("../database/knex");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  createError,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
} = require("../helpers/error_helper");

const postLogin = async (req, res, next) => {
  const email = String(req.body.email);
  const password = String(req.body.password);
  if (!email || !password)
    next(
      createError({
        status: BAD_REQUEST,
        message: "`email` + `password` are required fields",
      })
    );

  await knex
    .select()
    .from("users")
    .where({ username })
    .then((user) => {
      if (Object.keys(user).length > 0) {
        bcrypt.compare(password, user[0].password, async (err, hashed) => {
          const currentUser = await {
            id: user[0].id,
            username: user[0].username,
            role: user[0].role_id,
          };
          if (hashed) {
            const token = await jwt.sign(currentUser, "secret", {
              expiresIn: "24h",
            });
            await res.json({
              ok: true,
              message: "Login successful",
              user: currentUser,
              token: token,
            });
          } else {
            next(
              createError({
                status: UNAUTHORIZED,
                message: "Email or Password invalid",
              })
            );
          }
        });
      } else {
        next(
          createError({
            status: FORBIDDEN,
            message: "Utilisateur non trouvé",
          })
        );
      }
    });
};

module.exports = {
  postLogin,
};
*/
