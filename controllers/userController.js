const Model = require("../models");
const Service = require("../services");
const { table } = require("console");

// PDF
const PDFDocument = require("pdfkit");
const fs = require("fs");

module.exports = {
  CreateUser: async (req, res, data) => {
    let userData = {
      fullName: data.name,
      email: data.email,
      age: data.age,
      gender: data.gender,
      address: data.address,
    };

    const user = await Service.UserService.getUser(userData);

    if (user) {
      // return res.status(400).json({ msg: "User Already Registered" });
      return {
        status: 400,
        msg: "User already Registered",
      };
    } else {
      let userdata = {
        fullName: data.fullName,
        email: data.email,
        age: data.age,
        gender: data.gender,
        Address: data.Address,
      };

      let user = await Service.UserService.addUser(userdata);

      if (user) {
        // return res.status(200).json({ msg: "User added successfully" });
        return {
          status: 200,
          msg: "User added successfully",
        };
      } else {
        return {
          status: 400,
          msg: "Unable to Register the User",
        };
        // res.status(404).json({ msg: "Unable to Register thw User" });
      }
    }
  },

  GetUser: async () => {
    let user = await Service.UserService.getAllUser();
    return user;
  },

  getpdf: async () => {
    let data = await Service.UserService.getpdf();
    if (data) {
      const doc = new PDFDocument({ margin: 30, size: "A4" });
      const size = data.length;
      console.log(size);
      doc.pipe(fs.createWriteStream("generatPdf.pdf"));

      doc.fontSize(20).text("Generating PDF\n\n");
      doc.fontSize(12).text(`Name          Age      Gender      Address`, {
        columns: 5,
        height: 10,
        justify: "left",
      }),
        doc.moveTo(50, 70).lineTo(500, 70).stroke();
      for (var i = 0; i < data.length; i++) {
        var fullName = data[i]["fullName"];
        var age = data[i]["age"];
        var gender = data[i]["gender"];
        var Address = data[i]["Address"];
        doc
          .fontSize(12)
          .text(
            `${fullName}           ${age}              ${gender}           ${Address}\n`,
            {
              columns: 5,
              height: 10,
              justify: "left",
            }
          );
      }
      doc
        .moveTo(50, 100 + size * 15)
        .lineTo(500, 100 + size * 15)
        .stroke();
      doc.fontSize(12).text(`\n\nTotal users - ${size}`);
      doc.end();
      return data;
    } else {
      return "Can't fetch data.";
    }
  },
};
