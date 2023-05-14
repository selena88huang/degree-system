const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('已連接到資料庫');
    return client.db('db2'); // 替換成你的資料庫名稱
  } catch (error) {
    console.error('無法連接到資料庫:', error);
    throw new Error('無法連接到資料庫');
  }
}

module.exports = {
  connectToDatabase,
};
