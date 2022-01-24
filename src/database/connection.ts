import knex from "knex";
import path from 'path'

const connection = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'admin',
        database: 'chfitness'
    },
    useNullAsDefault: true,
    migrations: {
        directory: path.join(__dirname, 'database', 'migrations')
    }
})


export default connection