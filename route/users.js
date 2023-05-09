const express = require("express");
const router = express.Router();
const { User } = require('../model/db');

router.post("/save", (req, res, next) => {
  console.log("일로옴", req.body);
  const { username, age, married } = req.body;
  User.create({
    username,age,married
  }).then(() => {
     res.send('저장하였습니다.')
  }).catch((e) => {
     res.send('저장이 실패하였습니다.')
  })
  // res.send("result 입니다.");
});

module.exports = router;
