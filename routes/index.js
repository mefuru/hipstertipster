
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render("index");
};

exports.about = function(req, res){
    res.render("about");
};

exports.livescores = function(req, res){
    res.render("livescores");
};

exports.contact = function(req, res){
    res.render("contact");
};

exports.bookies = function(req, res){
    res.render("bookies");
};

exports.calculator = function(req, res){
    res.render("calculator");
};

exports.renderBookie = function(req, res){
    res.send(req.query.name);
};

exports.picks = function(req, res){
    res.render("picks");
};

