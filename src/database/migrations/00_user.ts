import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").notNullable()
        table.string("name").notNullable()
        table.string("email").unique().notNullable()
    }) 
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("users")
}