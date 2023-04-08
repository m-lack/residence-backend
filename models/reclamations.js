const createGuts = require("../helpers/model-guts");

const name = "Reclamation";
const tableName = "reclamations";

const selectableProps = [
  "id",
  "user_id",
  "description",
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

  const create = (props) =>
    beforeSave(props).then((reclamation) => guts.create(reclamation));

  return {
    ...guts,
    create,
  };
};
