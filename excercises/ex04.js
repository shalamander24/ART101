
let count= 0;

let colors= ["Orchid", "Coral", "Hot Pink", "Plum"];
colors.push("Sea Green");
colors.unshift("Rosy Brown");
let colorsSize=colors.length;
colorsSize; // returns 6, the number of elements in the array “colors”
$("#needy-button").click( function(){
    $("#needy-button").html( "Clicks " + count + " Color: " + colors[count] );
    
    count = count + 1;
});

// when it is cloeked
// add one to the total number

// show the total number
// on our button
// show "click total number times"

// a top limit