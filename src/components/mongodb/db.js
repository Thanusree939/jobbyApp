const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'grievanceRedressalSystem';

let db;

async function connectToDB() {
  const client = new MongoClient(url);
  await client.connect();
  console.log("Connected successfully to MongoDB server");
  db = client.db(dbName);
}

function getDB() {
  if (!db) {
    throw new Error('DB not connected. Please call connectToDB first.');
  }
  return db;
}

module.exports = { connectToDB, getDB };
