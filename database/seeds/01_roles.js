exports.seed = function (knex) {
  return knex("roles")
    .del()
    .then(() => {
      return knex("roles").insert([
        {
          name: "Admin",
        },
        {
          name: "User",
        },
      ]);
    });
};
