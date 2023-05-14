const express = require('express');
const dataRoutes = require('./routes/data');

const app = express();
const PORT = 3000;

// 設定中介軟體
app.use(express.json());

// 設定路由
app.use('/api', dataRoutes);

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器已啟動，監聽埠號 ${PORT}`);
});
