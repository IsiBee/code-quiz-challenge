
var timeCounter = 60;
var quizScore = 0;

var beginQuizEl = document.querySelector("#start-button");

var welcomeEl = document.querySelector(".main-container");
var questionContainer = document.querySelector(".question-container");
var answerContainer = document.querySelector(".answer-container");

var questionEl = document.querySelector("#question");
var answerAEl = document.querySelector("#answer-a");
var answerBEl = document.querySelector("#answer-b");
var answerCEl = document.querySelector("#answer-c");
var answerDEl = document.querySelector("#answer-d");

// Creating an array of question and answer objects.
var quizQuestions = [{q: "",a: ""},
{q: "",a: ""},
{q: "",a: ""},
{q: "",a: ""},
{q: "",a: ""},
{q: "",a: ""},
{q: "",a: ""},
{q: "",a: ""},
{q: "",a: ""},
{q: "What color is the sky?",a: "c"}];

// Creates an array of multiple choice answer objects. 
// These are potential answers for each question listed above.

var quizMultipleChoiceAnswers = [{a: "red",b: "yellow", c: "blue", d:"green"},
{a: "",b: "", c: "", d:""},
{a: "",b: "", c: "", d:""},
{a: "",b: "", c: "", d:""},
{a: "",b: "", c: "", d:""},
{a: "",b: "", c: "", d:""},
{a: "",b: "", c: "", d:""},
{a: "",b: "", c: "", d:""},
{a: "",b: "", c: "", d:""},
{a: "red",b: "yellow", c: "blue", d:"green"}];


var hideContent = function(element){
    element.setAttribute("style","display: none;");
};

var showContent = function(element){
    element.removeAttribute("style");
}

var takeQuiz = function(){
    
    hideContent(welcomeEl);
    hideContent(beginQuizEl);
    showContent(questionContainer);
    showContent(answerContainer);

    for(var i = 0; i < quizQuestions.length; i++){
        // Display the question
        questionEl.textContent = quizQuestions[i].q;
        // Display the answer options
        answerAEl.textContent = "a. " + quizMultipleChoiceAnswers[i].a;
        answerBEl.textContent = "b. " + quizMultipleChoiceAnswers[i].b;
        answerCEl.textContent = "c. " + quizMultipleChoiceAnswers[i].c;
        answerDEl.textContent = "d. " + quizMultipleChoiceAnswers[i].d;
        
    }
};


// Event Listeners
hideContent(questionContainer);
hideContent(answerContainer);
beginQuizEl.addEventListener("click", takeQuiz);
