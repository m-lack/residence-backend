const createGuts = require("../helpers/model-guts");

const name = "Contribution";
const tableName = "contributions";

const selectableProps = [
  "id",
  "user_id",
  "month",
  "amount",
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
    beforeSave(props).then((contribution) => guts.create(contribution));

  return {
    ...guts,
    create,
  };
};
