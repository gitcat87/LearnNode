const express = require('express');
const router = express.Router();
const { User } = require('../model/db');
// router.get('/', (req, res,next) => {
//     res.render('index',{a:"a는 10입니다...."});
// })

router.get('/', async(req, res, next) => {
    const users = await User.findAll();
    res.render('index', { users });
})

module.exports = router;