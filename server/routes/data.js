const express = require('express');
const { connectToDatabase } = require('../db/db');

const router = express.Router();

// 處理 GET 請求，從資料庫中取得資料
router.get('/data', async (req, res) => {
    try {
        const database = await connectToDatabase();
        const collection = database.collection('grade'); // 替換成你的集合名稱

        const result = await collection.find().toArray();
        res.json(result);
    } catch (error) {
        console.error('資料庫操作出錯:', error);
        res.status(500).json({ error: '伺服器錯誤gg' });
    }
});

// 處理 POST 請求，將資料存入資料庫
router.post('/data', async (req, res) => {
    try {
        const database = await connectToDatabase();
        const collection = database.collection('grade'); // 替換成你的集合名稱

        // 從前端取得的資料
        const { field1 } = req.body;

        // 建立要插入的文件
        const document = { field1 };

        // 將文件插入集合中
        const result = await collection.insertOne(document);
        res.json(result);
    } catch (error) {
        console.error('資料庫操作出錯:', error);
        res.status(500).json({ error: '伺服器錯誤pp' });
    }
});

module.exports = router;
