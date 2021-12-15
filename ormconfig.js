module.exports = {
    type: 'mysql',
    host: 'database',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations',       
    },
}