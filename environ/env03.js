// Declaring an array with name mystarters
let mystarters = ["Fuzzy", "Willow", "Angel"];

// Function that checks a guessed number
function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1–10?");
    
    if (userNumber == whatNumber) {
        $("#output").html("The crystals hold the truth of what truly happened that night, you must collect all six...");
    } else {
        $("#output").html("You are not ready for the truth...");
    }
}

// Button click triggers the number-guess function
$("#mystery-button").click(function () {
    askNumber(6);
});

// Hover text for picture 1
$("#mypic1").hover(
    function () { $("#status").text("He watches your every move..."); },
    function () { $("#status").text("Wait come backkkk"); }
);

// Story sentences
let megaSentence1 = "<h2>This is totally legit</h2>";
let megaSentence2 = "<p>Now he rests alone with the jewels as he is set to slumber for the next century... or does he?</p>";
let megaSentence3 = "<p>In a faraway land there lives a little dragon named Spike. He loved crystals until all the crystals were in his possession. His best friends are " 
                    + mystarters[0] + " and " + mystarters[2] + ".</p>";
let megaSentence4 = "<p>This is Spike. He was a friendly dragon, but with time everyone can lose something.</p>";

// Output and placement of story paragraphs
$("#output").html(megaSentence4);
$("#mypic1").after(megaSentence4);

$("#output").html(megaSentence3);
$("#mypic2").after(megaSentence3);

$("#output").html(megaSentence1);
$("#mypic1").after(megaSentence1);

$("#output").html(megaSentence2);
$("#mypic3").after(megaSentence2);

// Expand/collapse nice-block
$(".nice-block span").click(function () {
    $(this).parent().toggleClass("more");

    if ($(this).html() === "more") {
        $(this).html("less");
    } else {
        $(this).html("more");
    }
});
