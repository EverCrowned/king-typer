import Knex from "knex";

export const up = async (knex: Knex) => {
    return knex.schema.createTable("users", table => {
        table.increments("id");
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.string("role").notNullable();
        table.integer("exp").notNullable();
        table.string("description");
        table.specificType("tutorials", "INT[]").notNullable();
    });
};

export const down = async (knex: Knex) => {
    return knex.schema.dropTable("users");
};
