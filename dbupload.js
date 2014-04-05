// Dependencies
var MongoClient = require('mongodb').MongoClient;
var keys = require("./keys.js");
var ObjectID = require('mongodb').ObjectID;

var uri = process.env.MONGOLAB_URI || keys.MONGOURI;

MongoClient.connect(uri, function(err, db) {
    if(err) throw err;
    var votes = db.collection("votes");
    var doc = {title: 'testTitle', votes: 0, imgFileName: };
    votes.insert(doc, function(err, doc){
        if(err) throw err;
        console.log(doc);
    });
    db.close();
});

