var wordList = ["animales", "gato", "perro", "serpiente", "comida", "manzana", "limon", "cereza", "escuela", "lapiz", "goma", "papel"];

    console.log(wordList[3]);

var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "\u00f1", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	console.log(letterChoices[14]);

// canvas drawing
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// draw ground
ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(50,250);
ctx.lineTo(150,250);
ctx.lineTo(150,240);
ctx.lineTo(50,240);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();



// draw gallows pole



// draw hanging pole



// draw brace





// test
