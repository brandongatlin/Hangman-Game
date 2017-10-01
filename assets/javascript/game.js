var wordList = ["animales", "gato", "perro", "serpiente", "comida", "manzana", "limon", "cereza", "escuela", "lapiz", "goma", "papel"];

    console.log(wordList[3]);

var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "\u00f1", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	console.log(letterChoices[14]);

// canvas drawing variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// draw setup

// draw ground
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "1";
ctx.strokeRect(25, 180, 200, 1);

// draw gallows pole
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "1";
ctx.strokeRect(35, 25, 1, 155);

// draw hanging pole
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "1";
ctx.strokeRect(25, 25, 100, 1);

// draw brace
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(35, 50);
ctx.lineTo(60, 25);
ctx.stroke();
