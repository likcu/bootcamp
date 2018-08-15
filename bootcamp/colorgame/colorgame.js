var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
	
	setupMode();

	setupSquares();

	resetFunction();
}

function setupMode(){
	for(var i = 0; i < modeBtn.length; i++){
		modeBtn[i].addEventListener("click",function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent == "Easy" ? numSquares = 3 : numSquares = 6;
			resetFunction();
		})
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click",function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				changeColor(clickedColor);
				messageDisplay.textContent = "Correct";
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?"
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}


// easybtn.addEventListener("click",function(){
// 	this.classList.add("selected");
// 	hardbtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.backgroundColor = "steelblue";
// 	messageDisplay.textContent = "";
// })

// hardbtn.addEventListener("click",function(){
// 	this.classList.add("selected");
// 	easybtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
		
// 	}
// 	h1.style.backgroundColor = "steelblue";
// 	messageDisplay.textContent = "";
// })

resetButton.addEventListener("click",function(){
	resetFunction();
})

function resetFunction(){
	colors = generateColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}

function changeColor(color){
	for(var i = 0; i < squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(number){
	var array = [];
	for(var i = 0; i < number; i++){
		array.push(randomColor());
	}
	return array;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}