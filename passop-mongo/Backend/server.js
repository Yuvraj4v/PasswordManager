const express = require('express');
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

dotenv.config()

const app = express()
const port = 3000
app.use(bodyParser.json())

// Connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// Database Name
const dbName = 'passop';

const db = client.db(dbName);

app.get('/', async (req, res) => {
    const collection = db.collection('documents');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

app.post('/', async (req, res) => {
    const collection = db.collection('documents');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})