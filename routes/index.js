
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render("index");
};

exports.about = function(req, res){
    res.render("about");
};

exports.feed = function(req, res){
    res.render("feed");
};

exports.contact = function(req, res){
    res.render("contact");
};

exports.addevent = function(req, res){
    res.render("addevent");
};

exports.vote = function (req, res) {
    var event = req.event;
    event.votes++;

    res.render('index');
};