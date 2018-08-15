var button = document.querySelector("button");
var ifWhite = false;

button.addEventListener("click",toggle);

function toggle(){
	// if(ifWhite){
	// 	document.body.style.background = "purple";
	// 	//ifWhite = false;
	// }else{
	// 	document.body.style.background = "white";
	// 	//ifWhite = true
	// }
	// ifWhite = !ifWhite;
	document.body.classList.toggle("purple");
}