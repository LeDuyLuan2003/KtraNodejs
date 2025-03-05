const express = require('express');
const path = require('path');
const app = express();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

// Cấu hình thư mục public cho file tĩnh (CSS, JS, hình ảnh)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'views/admin/assets')));

// Sử dụng router cho admin và user
app.use('/admin', adminRoutes);  // Các route bắt đầu bằng /admin
app.use('/', userRoutes);        // Các route bắt đầu bằng /

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
