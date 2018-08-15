var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p1Score = 0;
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;

var ifGameOver = false;
var winnerScore = 5;

var resetButton = document.querySelector("#reset");

var numInput = document.querySelector("input[type='number']");
var bound = document.querySelector("#bound");

p1Button.addEventListener("click",function(){
	if(!ifGameOver){
		p1Score ++;
		if(p1Score === winnerScore){
			p1Display.classList.add("winner");
			ifGameOver = !ifGameOver;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click",function(){
	if(!ifGameOver){
		p2Score ++;
		if(p2Score === winnerScore){
			p2Display.classList.add("winner");
			ifGameOver = !ifGameOver;
		}
		p2Display.textContent = p2Score;
	}
	
});


function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	ifGameOver = false;
}

resetButton.addEventListener("click",function(){
	reset();
});

numInput.addEventListener("change",function(){
	bound.textContent = numInput.value;
	winnerScore = Number(numInput.value);
	reset();
});
