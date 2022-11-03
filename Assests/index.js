 var Startbtn=document.querySelector(".start")
 console.log (Startbtn)
 var time = 60;
 var remainingtime = "";
 var questionEL = document.getElementById("questiondiv");
 var buttona = document.getElementById("answer-a");
 var buttonb = document.getElementById("answer-b");
 var buttonc = document.getElementById("answer-c");
 var buttond = document.getElementById("answer-d");
 var timerEL = document.getElementById("Timer");
Startbtn.addEventListener("click",function(){
    console.log ("click");
    starttime();

});


var questions = [
    {
question1: "What does HTML stand for?",
choices :[
    "(a) HYper Trainer Marking Language",
    "(b) Hyper Text Marketing Language",
    "(c)Hyper Text MArkup Language",
    "(d)Hyper Text Markup Leveler",
],
Answer: "(c)Hyper Text MArkup Language"
 },
 {
    question: "How many data type are there?",
    choices: [
        "(a)11",
        "(b)8",
        "(c)4",
        "(d)6",
    ],

    Answer:"(b)8"
}

]
var questionindex = 0;
var timeid;
function startquiz (){
    remainingtime = time;
timeid = setInterval(starttime, 1000);
timerEL.textContent = time;
questionindex++
startquestions();
}
var starttime = function(){
time--;
timerEL.textContent = time;
if(
   time <= 0
){
 endquiz();
}
}
function startquestions(){

}



var score=0;

for(var i=o; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if (response==qestions[i].prompt)
    score++;
    alert("Correct)
}else
alert("Wrong")
{

    }
}
