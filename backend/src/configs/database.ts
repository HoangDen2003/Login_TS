// import dotenv from 'dotenv';
// dotenv.config()

// const host = process.env.DB_HOST
// const username = process.env.DB_USER
// const password = process.env.DB_PASSWORD
// const database = process.env.DB_NAME

// module.exports = {
//   development: {
//     username,
//     password,
//     database,
//     host,
//     port: 3306,
//     dialect: 'mysql',
//   },
// }



// import { Dialect, Sequelize } from 'sequelize'

// const dbName = process.env.DATABASE_NAME as string
// const dbUser = process.env.DATABASE_USERNAME as string
// const dbHost = process.env.DATABASE_HOST
// const dbPassword = process.env.DATABASE_PASSWORD

// const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
//   host: dbHost,
//   dialect: 'mysql'
// })

// export default sequelizeConnection

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;
