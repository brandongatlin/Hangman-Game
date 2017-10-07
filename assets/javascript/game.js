var wordList = ["gato", "perro", "serpiente", "manzana", "limon", "cereza", "escuela", "lapiz", "goma", "papel", "boligrafo", "borrador", "pizarra", "cuaderno"];

    console.log(wordList[3]);

var answerArray = [];

var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "\u00f1", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	console.log(letterChoices[14]);

var iniciar = document.getElementById("iniciar");

// random word generator function
function getRandomWord() {
    var randomWord = Math.floor(Math.random() * (wordList.length));
    document.getElementById("random-word-here").innerHTML = (wordList[randomWord]);
    
}

for (var i = 0; i < randomWord.length; i++) {
    answerArray[i] = "_";
    
      }

var remainingLetters = randomWord.length;


// test

x = randomWord.length;

y = x - 1;

while (x>0) {
    numChar++;
    var letter = randomWord.substring(y,x);
    if (letter === "") {
        document.getElementById("letter" + x).innerHTML = "&nbsp;";

    }
}




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

// draw noose
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(110, 25);
ctx.lineTo(110, 45);
ctx.stroke();

// draw man

// draw head

ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.arc(110, 60, 15, 0, Math.PI*2, false);
ctx.stroke();


// draw torso
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(110, 75);
ctx.lineTo(110, 125);
ctx.stroke();

// draw his right arm
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(110, 80);
ctx.lineTo(80, 100);
ctx.stroke();

// draw his left arm
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(110, 80);
ctx.lineTo(140, 100);
ctx.stroke();

// draw his right leg
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(110, 125);
ctx.lineTo(90, 160);
ctx.stroke();

// draw his left leg
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.moveTo(110, 125);
ctx.lineTo(130, 160);
ctx.stroke();

// draw sad face
ctx.strokeStyle = "black";
ctx.lineWidth = "2";
ctx.beginPath();
ctx.arc(110, 70, 5, 0, Math.PI, true);
ctx.stroke();

// draw x eyes
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = "1";
ctx.beginPath();
ctx.moveTo(112, 52);
ctx.lineTo(117, 57);
ctx.moveTo(112, 57);
ctx.lineTo(117, 52);
ctx.moveTo(102, 52);
ctx.lineTo(107, 57);
ctx.moveTo(102, 57);
ctx.lineTo(107, 52);
ctx.stroke();



















