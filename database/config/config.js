module.exports = {
    development: {
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
        host: env.DB_HOST,
        port: env.DB_PORT,
        dialect: 'mysql',
        timezone: '+03:00',
    },

    test: {
        username: 'root',
        password: null,
        database: 'tuhoyee',
        host: '127.0.0.1',
        port: '3306',
        dialect: 'mysql',
    },

    production: {
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
        host: env.DB_HOST,
        port: env.DB_PORT,
        dialect: env.DB_CONNECTION,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            }
        },
        timezone: '+03:00',
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }

}