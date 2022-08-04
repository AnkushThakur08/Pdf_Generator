const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.post("/createUser", async (req, res) => {
  // (req.body) is used to take the data from the frontEnd, and here we are passing it bcz we are excepting the data from the frontEnd
  let user = await controllers.UserRegister.CreateUser(req, res, req.body);
  res.json(user);
});

router.get("/getUser", async (req, res) => {
  let user = await controllers.UserRegister.GetUser();
  res.json(user);
});

router.get("/getpdf", async (req, res) => {
  let user = await controllers.UserRegister.getpdf();
  res.json(user);
});

module.exports = router;
