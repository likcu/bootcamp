var todos = [];
var input = prompt("what do you wanna do?");
while(input != "quit"){
	if(input === "list"){
		seeList();
	}else if(input === "new"){
		addNew();
	}else if(input === "delete"){
		deleteTask();
	}
	input = prompt("what do you wanna do?");
}
console.log("ok, you quit!")

function seeList(){
	todos.forEach(function(ele,index){
			console.log("*********");
			console.log(index + ":" +ele);
			console.log(ele + ":" +index);
		})
}

function addNew(){
	var newTodo = prompt("new task");
		todos.push(newTodo);
}

function deleteTask(){
	var indexToDelete = prompt("index you wanna delete");
		todos.splice(indexToDelete,1);
}


