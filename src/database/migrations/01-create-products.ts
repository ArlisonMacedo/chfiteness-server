import {Knex} from 'knex'

export async function up (knex: Knex) {
    return await knex.schema.createTable('products', table => {
        table.increments('id')
        table.string('farma_name').notNullable()
        table.string('comercial_name').nullable()
        table.string('net_weight').notNullable()
        table.decimal('price').notNullable()
        table.string('type_application').notNullable()
        table.string('formula').notNullable()
        table.string('properties_indications').notNullable()
        table.string('adverse_reactions').notNullable()
        table.string('counter_indications').notNullable()
        table.string('dosage').notNullable()
        table.string('image').notNullable()
        table.string('whatsapp').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}

export async function down (knex: Knex){
    return await knex.schema.dropTable('products')
}