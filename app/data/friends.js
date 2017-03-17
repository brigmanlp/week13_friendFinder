//Data
//Below will hold all of the friends/dog breeds
//Decided to do a Dog Finder, with 10 different dog breeds
var friendsArray = [{
    "name": "Labrador Retrievers",
    "photo": "http://cdn.akc.org/social/Lab-puppies.jpg",
    "scores": [5, 4, 2, 5, 1, 1, 2, 1, 3, 5]
}, {
    "name": "German Shepherd",
    "photo": "http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg",
    "scores": [3, 4, 2, 4, 4, 1, 1, 2, 3, 4]
}, {
    "name": "Bulldogs",
    "photo": "http://cdn.akc.org/Marketplace/Breeds/Bulldog_SERP.jpg",
    "scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
}, {
    "name": "Siberian Huskies",
    "photo": "http://cdn.akc.org/Marketplace/Breeds/Siberian_Husky_SERP.jpg",
    "scores": [5, 2, 4, 3, 3, 2, 1, 3, 3, 4]
}, {
    "name": "Yorkshire Terriers",
    "photo": "http://cdn.akc.org/Marketplace/Breeds/Yorkshire_Terrier_SERP.jpg",
    "scores": [4, 1, 5, 3, 4, 5, 2, 3, 4, 5]
}, {
    "name": "Cockapoo",
    "photo": "http://cdn.akc.org/AKCDL_cockapoos02_2015_bloghead.jpg",
    "scores": [4, 1, 5, 3, 4, 5, 2, 3, 4, 5]
}, {
    "name": "Cavalier King Charles Spaniel",
    "photo": "http://cdn.akc.org/Marketplace/Breeds/Cavalier_King_Charles_Spaniel_SERP.jpg",
    "scores": [3, 4, 2, 4, 4, 1, 1, 2, 3, 4]
}, {
    "name": "Great Danes",
    "photo": "http://cdn.akc.org/Marketplace/Breeds/Great_Dane_SERP.jpg",
    "scores": [5, 4, 2, 5, 1, 1, 2, 1, 3, 5]
}, {
    "name": "Boxers",
    "photo": "http://cdn.akc.org/Marketplace/Breeds/Boxer_SERP.jpg",
    "scores": [1, 5, 1, 3, 5, 1, 4, 3, 2, 1]
}, {
    "name": "Chihuahua",
    "photo": "http://cdn.akc.org/Marketplace/Breeds/Chihuahua_SERP.jpg",
    "scores": [1, 3, 3, 1, 2, 4, 4, 1, 3, 1]
}, {
    "name": "Pug",
    "photo": "http://cdn.akc.org/Marketplace/Breeds/Pug_SERP.jpg",
    "scores": [5, 2, 4, 3, 3, 2, 1, 3, 3, 4]
}, {
    "name": "Golden Retrievers",
    "photo": "http://cdn.akc.org/Marketplace/Breeds/Golden_Retriever_SERP.jpg",
    "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}];

//we must export the array to make it accessible to other files using require
module.exports = friendsArray;