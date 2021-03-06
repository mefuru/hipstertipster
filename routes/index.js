// Dependencies
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var uri = process.env.MONGOLAB_URI || require("../keys.js").MONGOURI;

exports.about = function(req, res){
    res.render("about");
};

exports.index = function(req, res){
    MongoClient.connect(uri, function(err, db) {
        if(err) throw err;
        var votes = db.collection("votes");
        var cursor = votes.find().sort({votes: -1});
        cursor.toArray(function(err, docs) {
            if(err) throw err;
            res.render("index", {events: docs});
            db.close();
        });
    });
};

exports.quiz = function(req, res){
    res.render("quiz");
};

exports.item = function(req, res){
    MongoClient.connect(uri, function(err, db) {
        if(err) throw err;
        var votes = db.collection("votes");
        var query = {_id: new ObjectID(req.params.eventId)};
        var cursor = votes.findOne(query, function(err, doc) {
            console.log(doc);
           res.render("item", {event: doc});
        });
    });
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
        var query = {_id: new ObjectID(req.params.eventId)};
        var operator = {$inc : {votes : 1 } };
        var options = {upsert: true, multi: true};
        votes.update(query, operator, options, function(err, doc){
            if(err) throw err;
            console.log(doc);
            db.close();
            res.redirect("/#" + req.params.eventId);
        });
    });
};
