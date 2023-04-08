const createGuts = require("../helpers/model-guts");

const name = "Host";
const tableName = "hosts";

const selectableProps = [
  "id",
  "user_id",
  "building",
  "IG",
  "APT",
  "updated_at",
  "created_at",
];

module.exports = (knex) => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps,
  });

  const create = (props) => beforeSave(props).then((host) => guts.create(host));

  return {
    ...guts,
    create,
  };
};
