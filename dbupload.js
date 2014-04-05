// Dependencies
var MongoClient = require('mongodb').MongoClient;
var keys = require("./keys.js");
var ObjectID = require('mongodb').ObjectID;

var uri = process.env.MONGOLAB_URI || keys.MONGOURI;

var events = [
    {title: 'Meet the London coffee scene @ London Coffee Festival', img: '1.jpg', desc: 'Meet the London artisan coffee scene,and the learn  the science behind your daily caffeine fix.'},
    {title: 'Secret Cinema presents the The Great Budapest Hotel ', img: '2.jpg', desc: 'Secret Cinema  invites you to take part in the latest Wes Anderson release'},
    {title: 'Learn how to bake at E5 Bakehouse', img: '3.jpg', desc: 'Bake your own bread and pizzas like a pro with a day full immersion classes'},
    {title: 'See the Drowned Man', img: '4.jpg', desc: 'Immersive theater experience'},
    {title: 'Get champagne and hotdogs at Bubble Dog', img: '5.jpg', desc: 'A champagne bar that does not serve caviar'},
    {title: 'Buy flowers at Columbia Road Flower Market', img: '6.jpg', desc: 'Weekly flower market in East London with plenty of galleries, pubs and cafes nearby'},
    {title: 'Extreme Garnishing at Indytute', img: '7.jpg', desc: 'Food workshop from The Robin Collective, the purveyors of experimental food, and the founders of the taxidermy team'},
    {title: 'Go for late night drinks at Danger of Death', img: '8.jpg', desc: 'Hidden bar below what appears to be a pizza cafe, tucked underground with a beyond-solid cocktail menu'},
    {title: 'Sample wines at Compagnie des Vins', img: '9.jpg', desc: 'Chic, civilised, cozy wine bar with superb wine knowledge and a blissful setting in the heart of Covent Garden'},
    {title: 'Burgers and Bacon fries at Olso in Hackney', img: '10.jpg', desc: ''},
    {title: 'Order an "Owl" and watch jazz at Night Jar', img: '11.jpg', desc: 'Cool speakeasy bar in shoreditch serving specialty cocktails and jass music'},
    {title: 'Yoga meets supper club', img: '12.jpg', desc: 'Do yoga and have a delicious vegan meal prepared afterward'},
    {title: 'Take a yoga class at Lululemon\'s new store', img: '13.png', desc: 'Free yoga every weekend'},
    {title: 'Watch the Big Lebowski at Rooftop Film Club', img: '14.jpg', desc: 'Rooftop film club featuring new releases and old classics enjoyed with the London skyline'},
    {title: 'Kimchinary, Korean Pop up in Stoke Newington', img: '15.jpg', desc: ''},
    {title: 'Cool drinking den behind the fridge door', img: '16.jpg', desc: 'Breakfast Club might be old news, but did you know about the bar behind the SMEG fridge door?'},
    {title: 'Salvation in Noodles', img: '17.jpg', desc: 'Authentic Vietnamese Noodle Shack in Dalston'},
    {title: 'Summer Gigs at Somerset House', img: '18.jpg', desc: 'Open air concerts featuring the hottest bands'},
    {title: 'Pizza Pilgrims', img: '19.jpg', desc: 'Travelling Pizza van found a home in Soho'},
    {title: 'Craft brewery tours at Crate in Hackney Wick', img: '20.jpg', desc: 'Behind the scenes look at brewing the hippest craft beers'},
    {title: 'Lost Chance Saloon', img: '21.jpg', desc: 'Gambling, glamour, dancing, debauchery, jazz and gin'},
    {title: 'DoggySunday at Gaucho in Hampstead', img: '22.jpg', desc: 'Doggy party with raffles, activities as well as steak and cocktails. Doggy easter attire optional.'},
    {title: 'The Diplomatic Curse from A Door in the Wall', img: '23.png', desc: 'Immersive real-life game throughout the streets of London solving a murder mystery'},
    {title: 'Grab a cocktail at Midnight Apothecary at Brunel Museum Roof Garden', img: '24.jpg', desc: 'Cocktail bar on a rooftop around a fire pit. Watch the sunset over the river, listen to birds, insects and local musicians while toasting marshmellows.'},
    {title: 'Dance & eat at Disappearing Dining Club', img: '25.jpg', desc: 'Monthly dinner party which takes place in a variety of locations - galleries, studios, carparks, warehouses, abandoned night clubs - combining great food and drink with a cracking night out'},
    {title: 'Sunday Film Club at Charlotte Street Hotel', img: '26.jpg', desc: 'Dinner and a movie in a beautiful cinema with leather arm chairs with popcorn and cocktails at hand'},
    {title: 'Electric Cinema', img: '27.png', desc: 'One of the UK\'s oldest cinemas featuring homemade doughnuts, leather sofas and cashmere blankets'},
    {title: 'Test your ping pong talent at Ping', img: '28.jpg', desc: 'Ping pong bar in West London with beer, cocktails, pizza and the occassional Ryan Gosling film'},
    {title: 'Kernal Brewpub', img: '29.jpg', desc: 'Sip on the hippest brews in south London underneath a railway arch'},
    {title: 'Salt beef sandwhichs and cocktails at Mishkin\'s', img: '30.jpg', desc: 'Cocktails at this homage to a Jewish Deli'}
];

events.forEach(function (event) {
    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var votes = db.collection("votes");
        votes.insert({title: event.title, imgFileName: event.img, description: event.desc, votes: 0}, function (err, doc) {
            if (err) throw err;
            console.log(doc);
            db.close();
        });
    });
});

