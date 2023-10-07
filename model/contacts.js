
const bodyParser = require('body-parser');
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

async function insertOne(req) {
    console.log('in insertOne');
    console.log(req);

    const client = new MongoClient(uri);

  
  try {
    await client.connect();

    const database = client.db('cse-341');
    const collection = database.collection('contacts');

    
    const dataInput = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      birthday: req.body.birthday,
      favoriteColor: req.body.favoriteColor
    };
    
    const cursor = await collection.insertOne(await dataInput);
    
    return cursor

  } catch (error) {
    console.error('Error:', error);
  } finally{
    await client.close()
  }
}

async function updateOne(id, req){
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    
    const database = client.db('cse-341');
    const collection = database.collection('contacts');

    const filter = { _id: new ObjectId(id) };
    const update = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      birthday: req.body.birthday,
      favoriteColor: req.body.favoriteColor
    
  }
    const contact = await collection.replaceOne(filter, update);
    return contact.modifiedCount
    
  } catch (error) {
    console.error('Error:', error);
  } finally{
    await client.close()
  }
}

async function deleteOne(id){
  const client = new MongoClient(uri);
  
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
