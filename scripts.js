//var passphrase = 'Open Sesame';
//console.log(passphrase.length);
//console.log(passphrase.toLowerCase());
//console.log(passphrase);
//console.log(passphrase.toUpperCase());

//Shout Program
var stringToShout = prompt("What should I shout?");
var shout = stringToShout.toUpperCase();
shout += "!!!";
alert(shout);

//Code Challenge Part 1
//Assign an all uppercase version of the id variable to the //userName variable.

var id = "23188xtr";
var lastName = "Smith";

var userName = id.toUpperCase();

//Code Challenge Part 2
//Complete the assignment to the userName variable by adding a # //symbol followed by an all uppercase version of the lastName //variable. In other words, using string concatenation so that the //final value of userName is "23188XTR#SMITH".

var id = "23188xtr";
var lastName = "Smith";

var userName = id.toUpperCase() + "#" + lastName.toUpperCase();