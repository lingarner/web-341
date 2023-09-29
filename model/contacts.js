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
  } finally{
    await client.close()
  }
}

async function insertOne() {
    console.log('in insertOne');
    const client = new MongoClient(uri);

  
  try {
    await client.connect();

    const database = client.db('cse-341');
    const collection = database.collection('contacts');

    
    const dataInput = {
      firstName: "LINDSAY",
      lastName: "GARNER",
      email: "joe@gmail.com",
      birthday: "June 19, 1996",
      favoriteColor: "blue"
    };
    
    const cursor = await collection.insertOne(dataInput);
    
    return cursor

  } catch (error) {
    console.error('Error:', error);
  } finally{
    await client.close()
  }
}

async function updateOne(id){
  const client = new MongoClient(uri);
  // console.log(id)
  
  try {
    await client.connect();
    
    const database = client.db('cse-341');
    const collection = database.collection('contacts');

    const filter = { _id: new ObjectId(id) };
    const update = {
      $set: {
        favoriteColor: 'yellow',
      }
    }
    const contact = await collection.updateOne(filter, update);
    return contact.modifiedCount
    
  } catch (error) {
    console.error('Error:', error);
  } finally{
    await client.close()
  }
}

async function deleteOne(id){
  const client = new MongoClient(uri);
  // console.log(id)
  
  try {
    await client.connect();
    
    const database = client.db('cse-341');
    const collection = database.collection('contacts');

    const filter = { _id: new ObjectId(id) };

    const contact = await collection.deleteOne(filter);
    
    return contact.deletedCount
  
    
  } catch (error) {
    console.error('Error:', error);
  } finally{
    await client.close()
  }
}

module.exports = {getAllPeople, getOnePerson, insertOne, updateOne, deleteOne}
