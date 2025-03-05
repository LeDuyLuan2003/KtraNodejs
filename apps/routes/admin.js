const express = require('express');
const path = require('path');
const router = express.Router();

// Định tuyến trả về trang chủ admin
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/admin/index.html'));
});


router.get('/template', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/admin/starter-template.html'));
});

router.get('/forms', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/admin/forms/forms.html'));
});

router.get('/widgets', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/admin/widgets.html'));
});

module.exports = router;
