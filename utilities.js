const { MongoClient } = require('mongodb');
require('dotenv').config();

async function getAllPeople() {
    console.log('in getAllPeople')

  const uri = process.env.mongodb;
  const client = new MongoClient(uri);

  
  try {
    await client.connect();

    const database = client.db('cse-341');
    const collection = database.collection('contacts');

    const cursor = collection.find();

    const data = [];
    await cursor.forEach(document => {
        data.push(document);
    });
    
    return data

  } catch (error) {
    console.error('Error:', error);
  }
}


module.exports = {getAllPeople}
