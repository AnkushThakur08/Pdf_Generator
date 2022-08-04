const Sequelize = require("sequelize");
const sequelize = new Sequelize("GeneratePdf", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

const connect = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection Established Successfully");
    })
    .catch((error) => {
      console.log(`Connection Does not Established ${error}`);
    });
};

const sync = () => {
  sequelize.sync({ alter: true }).then(() => {
    console.log("Successfully SYNCED!!");
  });
};

module.exports = { sequelize: sequelize, connect: connect, sync: sync };
