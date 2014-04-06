// Dependencies
var MongoClient = require('mongodb').MongoClient;
var keys = require("./keys.js");

var uri = process.env.MONGOLAB_URI || keys.MONGOURI;

var events = [
    {title: 'London Coffee Festival', img: '1.jpg', desc: 'Meet the London artisan coffee scene,and the learn  the science behind your daily caffeine fix.', votes: 5, loc: [51.5203595, -0.0736443]},
    {title: 'Secret Cinema presents the The Great Budapest Hotel', img: '2.jpg', desc: 'Secret Cinema  invites you to take part in the latest Wes Anderson release', loc: [51.506721, -0.1428981], votes: 5},
    {title: 'Learn how to bake at E5 Bakehouse', img: '3.jpg', desc: 'Bake your own bread and pizzas like a pro with a day full immersion classes', loc: [51.5412565, -0.0575902]},
    {title: 'See the Drowned Man', img: '4.jpg', desc: 'Immersive theater experience', loc: [51.507199, -0.113625]},
    {title: 'Get champagne and hotdogs at Bubble Dog', img: '5.jpg', desc: 'A champagne bar that does not serve caviar', loc: [51.5204056, -0.1364738]},
    {title: 'Buy flowers at Columbia Road Flower Market', img: '6.jpg', desc: 'Weekly flower market in East London with plenty of galleries, pubs and cafes nearby', loc: [51.529413, -0.0695561]},
    {title: 'Extreme Garnishing at Indytute', img: '7.jpg', desc: 'Food workshop from The Robin Collective, the purveyors of experimental food, and the founders of the taxidermy team', loc: [51.52151509999999, -0.0139317]},
    {title: 'Go for late night drinks at Danger of Death', img: '8.jpg', desc: 'Hidden bar below what appears to be a pizza cafe, tucked underground with a beyond-solid cocktail menu', loc: [51.5121577, -0.1295787]},
    {title: 'Sample wines at Compagnie des Vins', img: '9.jpg', desc: 'Chic, civilised, cozy wine bar with superb wine knowledge and a blissful setting in the heart of Covent Garden', loc: [51.5145613, -0.1263641]},
    {title: 'Burgers and Bacon fries at Olso in Hackney', img: '10.jpg', desc: '', loc: [51.5479818, -0.0575201]},
    {title: 'Order an "Owl" and watch jazz at Night Jar', img: '11.jpg', desc: 'Cool speakeasy bar in shoreditch serving specialty cocktails and jass music', loc: [51.5363795, -0.1013446]},
    {title: 'Yoga meets supper club', img: '12.jpg', desc: 'Do yoga and have a delicious vegan meal prepared afterward', loc: [51.53064, -0.1696]},
    {title: 'Take a yoga class at Lululemon\'s new store', img: '13.jpg', desc: 'Free yoga every weekend', loc: [51.507929, -0.0877086]},
    {title: 'Watch the Big Lebowski at Rooftop Film Club', img: '14.jpg', desc: 'Rooftop film club featuring new releases and old classics enjoyed with the London skyline', loc: [51.508515, -0.1254872]},
    {title: 'Kimchinary, Korean Pop up in Stoke Newington', img: '15.jpg', desc: '', loc: [51.559439, -0.080209]},
    {title: 'Cool drinking den behind the fridge door', img: '16.jpg', desc: 'Breakfast Club might be old news, but did you know about the bar behind the SMEG fridge door?', loc: [51.52546419999999, -0.0879389]},
    {title: 'Salvation in Noodles', img: '17.jpg', desc: 'Authentic Vietnamese Noodle Shack in Dalston', loc: [51.5467259, -0.0834048]},
    {title: 'Summer Gigs at Somerset House', img: '18.jpg', desc: 'Open air concerts featuring the hottest bands', loc: [51.24261689999999, -0.1680196]},
    {title: 'Pizza Pilgrims', img: '19.jpg', desc: 'Travelling Pizza van found a home in Soho', loc: [51.5149407 ,-0.1332378]},
    {title: 'Craft brewery tours at Crate in Hackney Wick', img: '20.jpg', desc: 'Behind the scenes look at brewing the hippest craft beers', loc: [51.5434104, -0.0248921]},
    {title: 'Lost Chance Saloon', img: '21.jpg', desc: 'Gambling, glamour, dancing, debauchery, jazz and gin', loc: [51.49636, -0.14308]},
    {title: 'DoggySunday at Gaucho in Hampstead', img: '22.jpg', desc: 'Doggy party with raffles, activities as well as steak and cocktails. Doggy easter attire optional.', loc: [51.5556715, -0.1762025]},
    {title: 'The Diplomatic Curse from A Door in the Wall', img: '23.png', desc: 'Immersive real-life game throughout the streets of London solving a murder mystery', loc: [51.5105587, -0.1308838]},
    {title: 'Midnight Apothecary at Brunel Museum', img: '24.jpg', desc: 'Cocktail bar on a rooftop around a fire pit. Watch the sunset over the river, listen to birds, insects and, local musicians while toasting marshmellows.', loc: [51.5016496, -0.0527856]},
    {title: 'Dance & eat at Disappearing Dining Club', img: '25.jpg', desc: 'Monthly dinner party which takes place in a variety of, locations - galleries, studios, carparks, warehouses, abandoned night clubs - combining great food and drink with a cracking night out', loc: [51.5241554, -0.0713786]},
    {title: 'Sunday Film Club at Charlotte Street Hotel', img: '26.jpg', desc: 'Dinner and a movie in a beautiful cinema with leather arm chairs with popcorn and cocktails at hand', loc: [51.51838679999999, -0.1350571]},
    {title: 'Electric Cinema', img: '27.jpg', desc: 'One of the UK\'s oldest cinemas featuring homemade doughnuts, leather sofas and cashmere blankets', loc: [51.5155317, -0.2050898]},
    {title: 'Test your ping pong talent at Ping', img: '28.jpg', desc: 'Ping pong bar in West London with beer, cocktails, pizza and the occassional Ryan Gosling film', loc: [51.5180697, -0.1085203]},
    {title: 'Kernal Brewpub', img: '29.jpg', desc: 'Sip on the hippest brews in south London underneath a railway arch', loc: [51.4957404, -0.0692936]},
    {title: 'Salt beef sandwhichs and cocktails at Mishkin\'s', img: '30.jpg', desc: 'Cocktails at this homage to a Jewish Deli', loc: [51.51247060000001, -0.120469]}
];

var loadEvents = function() {
    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var votes = db.collection("votes");
        var i = events.length;

        events.forEach(function (event) {
            votes.insert({title: event.title, imgFileName: event.img, description: event.desc, votes: event.votes || 0, loc: event.loc}, function (err, doc) {
                if (err) throw err;
                console.log(doc);
                i--;
                if (i === 0) {
                    db.close();
                }
            });
        });
    });
};

MongoClient.connect(uri, function (err, db) {
    if (err) throw err;
    var votes = db.collection("votes");
    votes.remove({}, function () {
        loadEvents();
    });
});
