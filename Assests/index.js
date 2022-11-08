 //creating start button called start
 var Startbtn=document.querySelector(".start")
 console.log (Startbtn)
 //60 seconds timer 
 var time = 60;
 var remainingtime = "";
 var questionEL = document.getElementById("questiondiv");
 var buttona = document.getElementById("answer-a");
 var buttonb = document.getElementById("answer-b");
 var buttonc = document.getElementById("answer-c");
 var buttond = document.getElementById("answer-d");
 var timerEL = document.getElementById("Timer");
 //click calls to start and start quiz
Startbtn.addEventListener("click",function(){
    console.log ("click");
    startquiz();

});

//quiz questions
var questions = [
 
 {
    question: "How many data type are there?",
    //multiple choice options
    choices: [
        "(a)11",
        "(b)8",
        "(c)4",
        "(d)6",
    ],
//correct answer
    Answer:"(b)8"
},
{
    question: "What does HTML stand for?",
    choices : [
        "(a) HYper Trainer Marking Language",
        "(b) Hyper Text Marketing Language",
        "(c)Hyper Text MArkup Language",
        "(d)Hyper Text Markup Leveler",
    ],
    Answer: "(c)Hyper Text MArkup Language"
     }

]
//insital start question on first question
var questionindex = -1;
var timeid;
function startquiz (){
    remainingtime = time;
timeid = setInterval(starttime, 1000);
timerEL.textContent = time;
questionindex++
startquestions();
};
var starttime = function(){
time--;
timerEL.textContent = time;
if(
   time <= 0
){
    //when timer ennds , function calls to end quiz 
 endquiz();
}
}
function startquestions(){
    var currentQuestions = questions[questionindex];
    //calling question
    questionEL.textContent = currentQuestions.question;
    //calling quesions array and choices key inside questions array
    //redering each choice
    buttona.textContent = questions[questionindex].choices[0]
    buttonb.textContent = questions[questionindex].choices[1]
    buttonc.textContent = questions[questionindex].choices[2]
    buttond.textContent = questions[questionindex].choices[3]

}

function endquiz(){

}

function checkanswers(choice){
    var correctanswer = questions[questionindex].Answer
    if(choice === correctanswer){
        alert("that is correct");
    }
    else {
        alert("that is incorrect");
        time -= 5;
    };
    if (questionindex === questions.length){
        alert("your score is " + time)
        endquiz();
    }
    else{
        questionindex++;
        startquestions();
        
    }

}

buttona.addEventListener("click", function(){
    checkanswers(buttona.textContent);
});
buttonb.addEventListener("click", function(){
    checkanswers(buttonb.textContent);
});buttonc.addEventListener("click", function(){
    checkanswers(buttonc.textContent);
});buttond.addEventListener("click", function(){
    checkanswers(buttond.textContent);
});


var score=0;

// for(var i=o; i < questions.length; i++){
// var response = window.prompt(questions[i].prompt);
// if (response==qestions[i].prompt)
// score++;
//  alert("Correct)
// }else
// alert("Wrong")
// {
// }

