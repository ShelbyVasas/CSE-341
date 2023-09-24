import dotenv from 'dotenv';
dotenv.config();
import { MongoClient } from 'mongodb';

export const client = new MongoClient(process.env.MONGODBCONNECTION)

// let _db;

// const initDb = async (callback) => {
//   if (_db) {
//     console.log('Db is already initialized!');
//     return callback(null, _db);
//   }
//   try {
//     const client = await MongoClient.connect(process.env.uri);
//     _db = client;
//     callback(null, _db);
//   } catch (err) {
//     callback(err);
//   }
// };

// const getDb = () => {
//   if (!_db) {
//     throw new Error('Db not initialized');
//   }
//   return _db;
// };

// export { initDb, getDb };
