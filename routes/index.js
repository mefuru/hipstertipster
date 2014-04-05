// Dependencies
var MongoClient = require('mongodb').MongoClient;
var keys = require("../keys.js");
var uri = process.env.MONGOLAB_URI || keys.MONGOURI;

exports.about = function(req, res){
    res.render("about");
};

exports.index = function(req, res){
    MongoClient.connect(uri, function(err, db) {
        if(err) throw err;
        var votes = db.collection("votes");
        var cursor = votes.find({votes: {$lt: 10 }});
        cursor.toArray(function(err, docs) {
            if(err) throw err;
            res.render("index", {events: docs});
        });
        db.close()
    });
});

exports.quiz = function(req, res){
    res.render("quiz");
};

exports.item = function(req, res){
    res.render("item");
};

exports.contact = function(req, res){
    res.render("contact");
};

exports.addevent = function(req, res){
    res.render("addevent");
};

exports.vote = function(req, res){
    // Update
    MongoClient.connect(uri, function(err, db) {
        if(err) throw err;
        var votes = db.collection("votes");
        var query = {_id: new ObjectID(req.eventId)};
        var operator = {$inc : {votes : 1 } };
        var options = {upsert: true, multi: true};
        votes.update(query, operator, options, function(err, doc){
            if(err) throw err;
            console.log(doc);
        });
        db.close();
    });
    res.render("feed");
};
