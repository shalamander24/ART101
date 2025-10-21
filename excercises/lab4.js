// declaring an array with name myCommutes
let myCommutes = ["metro bus", "UCSC taps bus", "walking", "walking with others", "Jordan's car"];
// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Bus",
    route: 1,
    print: "Out of my way",
    hasMiddleDoor: true,
    drivers: ["Tim", "Dave", "The chill guy"],
};
let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[5] + "</p>";
megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";
$("#output").html(megaSentence);