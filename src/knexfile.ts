import path from 'path'

module.exports = {
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
}