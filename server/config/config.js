require("dotenv").config();

module.exports = {
  //   development: {
  //     url: process.env.DEV_DB_URL,
  //     dialect: "postgres",
  //     operatorAliases: false
  //   }
  development: {
    username: "postgres",
    password: "123Abcd123",
    database: "postgresTest",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorAliases: false
  }
};
