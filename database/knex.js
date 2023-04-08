const environment = "developement";

const config = require("../knexfile")[environment];

module.exports = require("knex")(config);
