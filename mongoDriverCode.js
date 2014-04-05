// Dependencies
var MongoClient = require('mongodb').MongoClient;

// Create/insert
MongoClient.connect("mongodb://localhost:27017/rapGeniusData", function(err, db) {
    if(err) throw err;
    var songsCollection = db.collection("songs");
    var doc = {artist: "Mehul", age: 28};
    songsCollection.insert(doc, function(err, doc){
        if(err) throw err;
        console.log(doc);
    });
});

// Read/find
// Set up the connection to the local db
MongoClient.connect("mongodb://localhost:27017/rapGeniusData", function(err, db) {
    if(err) throw err;
    var songsCollection = db.collection("songs");
    songsCollection.findOne(function(err, doc){
        if(err) throw err;
        console.log(doc);
    });
});

// Update
MongoClient.connect("mongodb://localhost:27017/rapGeniusData", function(err, db) {
    if(err) throw err;
    var songsCollection = db.collection("songs");
    var query = {artist: "Mehul"};
    var operator = {$set:{sex:"male"}};
    var options = {upsert: true};
    songsCollection.update(query, operator, options, function(err, doc){
        if(err) throw err;
        console.log(doc);
    });
});

// Delete/Remove
MongoClient.connect("mongodb://localhost:27017/rapGeniusData", function(err, db) {
    if(err) throw err;
    var songsCollection = db.collection("songs");
    var query = {artist: "Mehul"};
    songsCollection.remove(function(err, noOfRemovedDocs){
        if(err) throw err;
        console.log(noOfRemovedDocs);
    });
});
