const createGuts = require("../helpers/model-guts");

const name = "Role";
const tableName = "roles";

const selectableProps = ["id", "name", "updated_at", "created_at"];

module.exports = (knex) => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps,
  });

  const create = (props) => beforeSave(props).then((role) => guts.create(role));

  return {
    ...guts,
    create,
  };
};
