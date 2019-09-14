import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import dbConfig from "../config";

dotenv.config();

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV;
const config = dbConfig[env];
const db = {};
console.log(config);
console.log("check here ");
const sequelize = new Sequelize(
  "postgres://postgres:123Abcd123@localhost:5342/postgresTest",
  config
);

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
