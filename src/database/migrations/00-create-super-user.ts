import {Knex} from 'knex'

export async function up (knex: Knex) {
    return await knex.schema.createTable('superuser', table => {
        table.increments('id')
        table.string('name').notNullable()
        table.string('password').notNullable()
    })
}


export async function down (knex: Knex){
    return await knex.schema.dropTable('superuser')
}