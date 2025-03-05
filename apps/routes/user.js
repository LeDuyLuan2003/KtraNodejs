const express = require('express');
const path = require('path');
const router = express.Router();

// Định tuyến trả về trang chủ user
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/user/index.html'));
});

module.exports = router;
