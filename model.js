const path = require("path");
const { Sequelize, Model, DataTypes } = require("sequelize");
//const sequelize = new Sequelize("sqlite::memory:");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "my.db"),
  logging: true,
});

debugger;

class Contact extends Model {}
Contact.init(
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { sequelize, modelName: "Contact" }
);


module.exports = {
  sequelize,
  Contact,
};
