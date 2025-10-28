// declaring an array with name myCommutes
let mystarters = ["Fuzzy", "Willow", "Angel"];
// declaring an object with name myfavriotestarters

function askNumber(whatNumber) {
let userNumber = prompt("Guess 1-10?");
if (userNumber == whatNumber) {$("#output").html("The crystals hold the truth of what truely happened that night, you must collect all six...");}
else {$("#output").html("You are not ready for the truth...");}}
$("#mystery-button").click(function () {
    askNumber(6);
});

let megaSentence;

megaSentence3 = "<p>In a far away land there lives a little dragon names spike, he loved crystals until all the crystals were in his possesion" + ", his best friends are " + mystarters[0] + " and " + mystarters[2] + "."+"</p>";
megaSentence2 = "<p>Now he rest alone with the jewels as he is rest to slumber for the next century...or does he?" + "</p>";
megaSentence= "<h2>This is totally legit</h2>";
megaSentence4 = "<p>This is Spike, he was a friendly dragon, but with time everyone can lose something</p>";

$("#output").html(megaSentence4);
$("#mypic1").after(megaSentence4);

$("#output").html(megaSentence3);

$("#mypic2").after(megaSentence3);

$("#output").html(megaSentence);
$("#mypic1").after(megaSentence);

$("#output").html(megaSentence2);
$("#mypic3").after(megaSentence2);      

