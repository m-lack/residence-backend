exports.up = function (knex) {
    return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"').then(() => {
      return knex.schema
        .createTable("roles", function (table) {
          table
            .uuid("id")
            .primary()
            .notNullable()
            .defaultTo(knex.raw("uuid_generate_v4()"));
          table.string("name", 255).notNullable();
          table.timestamp("created_at").defaultTo(knex.fn.now());
          table.timestamp("updated_at").defaultTo(knex.fn.now());
        })
        .createTable("users", function (table) {
          table
            .uuid("id")
            .primary()
            .notNullable()
            .defaultTo(knex.raw("uuid_generate_v4()"));
          table.uuid("role_id").unsigned().notNullable();
          table.string("username", 255).notNullable();
          table.string("password", 255).notNullable();
          table.timestamp("created_at").defaultTo(knex.fn.now());
          table.timestamp("updated_at").defaultTo(knex.fn.now());
          table.foreign("role_id").references("id").inTable("roles");
        })
        .createTable("reclamations", function (table) {
          table
            .uuid("id")
            .primary()
            .notNullable()
            .defaultTo(knex.raw("uuid_generate_v4()"));
          table.uuid("user_id").unsigned().notNullable();
          table.string("description", 255).notNullable();
          table.timestamp("created_at").defaultTo(knex.fn.now());
          table.timestamp("updated_at").defaultTo(knex.fn.now());
          table.foreign("user_id").references("id").inTable("users");
        })
        .createTable("hosts", function (table) {
          table
            .uuid("id")
            .primary()
            .notNullable()
            .defaultTo(knex.raw("uuid_generate_v4()"));
          table.uuid("user_id").unsigned().notNullable();
          table.string("building", 255).notNullable();
          table.string("IG", 255).notNullable();
          table.string("APT", 255).notNullable();
          table.timestamp("created_at").defaultTo(knex.fn.now());
          table.timestamp("updated_at").defaultTo(knex.fn.now());
          table.foreign("user_id").references("id").inTable("users");
        })
        .createTable("contributions", function (table) {
          table
            .uuid("id")
            .primary()
            .notNullable()
            .defaultTo(knex.raw("uuid_generate_v4()"));
          table.uuid("user_id").unsigned().notNullable();
          table.string("month", 255).notNullable();
          table.float("amount").notNullable();
          table.timestamp("created_at").defaultTo(knex.fn.now());
          table.timestamp("updated_at").defaultTo(knex.fn.now());
          table.foreign("user_id").references("id").inTable("users");
        });
    });
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTable("roles")
      .dropTable("users")
      .dropTable("reclamations")
      .dropTable("hosts")
      .dropTable("contributions");
  };
  