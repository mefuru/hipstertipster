
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render("index");
};

exports.about = function(req, res){
    res.render("about");
};

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
