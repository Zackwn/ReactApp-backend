import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("users").insert([
        {name: "Rafael", email:"rafael@gmail.com"},
        {name: "Zack", email:"zack@gmail.com"}
    ])
}