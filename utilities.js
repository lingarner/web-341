const { MongoClient, ObjectId } = require('mongodb');

require('dotenv').config();
const uri = process.env.mongodb;

async function getAllPeople() {
    console.log('in getAllPeople')

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

async function getOnePerson(id){
    const client = new MongoClient(uri);
    console.log(id)

    try {
      await client.connect();
  
      const database = client.db('cse-341');
      const collection = database.collection('contacts');
      const query = { _id: new ObjectId(id) };
      const contact = await collection.findOne(query);

      return contact
  
    } catch (error) {
      console.error('Error:', error);
    }
}


module.exports = {getAllPeople, getOnePerson}
