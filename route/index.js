const express = require('express');
const router = express.Router();
router.get('/', (req, res,next) => {
    res.render('index',{a:"a는 10입니다...."});
})

module.exports = router;