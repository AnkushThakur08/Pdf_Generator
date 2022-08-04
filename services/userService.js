const Model = require("../models");

exports.getUser = (data) => {
  return Model.UserRegister.findOne({
    where: { email: data.email },
  });
};

exports.addUser = (data) => {
  return Model.UserRegister.create(data);
};

exports.getAllUser = () => {
  return Model.UserRegister.findAll({});
};

exports.getpdf = () => {
  return Model.UserRegister.findAll({});
};
