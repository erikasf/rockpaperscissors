<!document html>
<html>
<head>
<script>
var computerCount = 0
var userCount = 0

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
var choice1 = userChoice;
var choice2 = computerChoice;

function counter(){
    if (choice2 == true){
        computerCount ++;
    }else{
        userCount ++;
    }
}

function compare(choice1, choice2){
    if(choice1 === choice2){
        return "The result is a tie!";
        prompt("please enter another choice");
    }
    
    else if (choice1 === "rock"){
       if (choice2 === "scissors") {        
        return "rock wins";
        
    }
    else{
        return "paper wins";

    }
    }  
    else if (choice1 === "paper"){
        if (choice2 === "rock"){
            return " paper wins";
        }
        else {
           return "scissors wi      ns";
        
        }
    }
}
</script>
</head>
<body>
<h1> Welcome To The Rock Paper Scissors Challenge!</h1>
<h2> Are you ready to play? Just type your response of rock paper or scissors into the box that will show up on your screen"</h2>
</body>
</html>
