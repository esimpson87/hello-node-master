const mongodb = require('mongodb');
const dbClient = mongodb.MongoClient;

dbClient.connect('mongodb://localhost:27017', (error, client) => {
if (error) {
  console.error(error);
  client.close();
}

var db = client.db('hellodb'); //store
var people = db.collection('person');

people.insertOne({
  "firstName": "fred1", 
  "lastName": "belotte"
}).then(() => {
  console.log(people.find({"firstName": "fred"}).toArray().then((data) => {
    console.log(data);
  }));
});


//instertOne
//updateOne
//deleteOne
//findOne

// client.close();
});