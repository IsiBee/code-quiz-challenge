
var timeCounter = 60;
var questionNumber = 0;
var quizScore = 0;



var beginQuizEl = document.querySelector("#start-button");
var timerEl = document.querySelector("#timer");
var highScoreEl = document.querySelector("#final-score");
var highScoreBtn = document.querySelector("#highScore-btn");
var viewBtn = document.querySelector("#view-highscores");

var welcomeEl = document.querySelector(".main-container");
var questionContainer = document.querySelector(".question-container");
var answerContainer = document.querySelector(".answer-container");
var highScoreContainer = document.querySelector(".highScore-container");
var formEl = document.querySelector(".initials-form");

var questionEl = document.querySelector("#question");
var answerAEl = document.querySelector("#answer-a");
var answerBEl = document.querySelector("#answer-b");
var answerCEl = document.querySelector("#answer-c");
var answerDEl = document.querySelector("#answer-d");

var resultEl = document.querySelector("#answer-result");

// Creating an array of question and answer objects.
var quizQuestions = [{ q: "Inside which HTML element does JavaScript live?", a: "a" },
{ q: "Which of the following indicates a loop?", a: "d" },
{ q: "Which key word immediately terminates a loop?", a: "b" },
{ q: "Which key word immediately terminates a function?", a: "c" },
{ q: "________ are required when writing an If statement?", a: "d" },
{ q: "What is the term for a function calling itself?", a: "a" },
{ q: "Which of following can you NOT use JavaScript for?", a: "d" },
{ q: "What built in method can be used to display an alert?", a: "b" },
{ q: "The setInterval and setTimeout methods use which unit of measure for time?", a: "d" },
{ q: "What method needs to be called to ensure setInterval() does not continue forever?", a: "c" }];

// Creates an array of multiple choice answer objects. 
// These are potential answers for each question listed above.

var quizMultipleChoiceAnswers = [{ a: "<script>", b: "<head>", c: "<meta>", d: "<div>" },
{ a: "for", b: "while", c: "if", d: "a and b" },
{ a: "alert", b: "break", c: "console.log", d: "switch" },
{ a: "end", b: "!=", c: "return", d: "var" },
{ a: "===", b: "else if", c: "switch statements", d: "conditions" },
{ a: "recursion", b: "erosion", c: "innerHTML", d: "getAttribute" },
{
    a: "Changing the content of HTML elements?", b: "Changing the CSS of HTML elements",
    c: "Hiding HTML elements", d: "Cooking dinner"
},
{
    a: "confirm('This is an alert')", b: "alert('This is an alert')",
    c: "document.alert('This is an alert')", d: "prompt('This is an alert'"
},
{ a: "nanoseconds", b: "minutes", c: "seconds", d: "milliseconds" },
{ a: "clearEyed()", b: "clearAll()", c: "clearInterval()", d: "clearTimeout()" }];


var hideContent = function (element) {
    element.setAttribute("style", "display: none;");
};

var showContent = function (element) {
    element.removeAttribute("style");
};

var countDown = function () {
    showContent(timerEl);
    var timeLeft = setInterval(function () {
        if ((timeCounter <= 0) || (questionNumber === quizQuestions.length)) {
            hideContent(timerEl);
            clearInterval(timeLeft);
            endQuiz();
        }
        else {
            timerEl.textContent = "Timer: " + timeCounter + " s";
            timeCounter--;
        }
    }, 1000);
};

var clearResult = function () {
    resultEl.textContent = "";
};

var getAnswer = function (event) {
    event.preventDefault();
    var userAnswer = event.target.getAttribute("answer-id");

    if (userAnswer === quizQuestions[questionNumber].a) {
        resultEl.textContent = "Correct!";
        timeCounter += 10;
        quizScore += 5;
    }
    else {
        resultEl.textContent = "Wrong!";
        timeCounter -= 10;
        quizScore -= 5;
    }
    // Clears the result after .5 seconds so as not to confuse the user.
    setTimeout(clearResult, 500);
    // Increments our question number so we move onto the next question.
    questionNumber++;
    // If we ran out of time or questions this will end the quiz.
    if ((timeCounter <= 0) || (questionNumber === quizQuestions.length)) {
        endQuiz();
    }
    // otherwise continue with the next question and set of answers.
    else {
        getQuestion();
        getMultipleChoiceAnswers();
        answerAEl.onclick = getAnswer;
        answerBEl.onclick = getAnswer;
        answerCEl.onclick = getAnswer;
        answerDEl.onclick = getAnswer;
    }
}

var getQuestion = function () {
    // Displays the question in the question element
    questionEl.textContent = quizQuestions[questionNumber].q;
};

var getMultipleChoiceAnswers = function () {
    // Displays each potential answer
    answerAEl.textContent = "a. " + quizMultipleChoiceAnswers[questionNumber].a;
    answerBEl.textContent = "b. " + quizMultipleChoiceAnswers[questionNumber].b;
    answerCEl.textContent = "c. " + quizMultipleChoiceAnswers[questionNumber].c;
    answerDEl.textContent = "d. " + quizMultipleChoiceAnswers[questionNumber].d;
};

var takeQuiz = function () {
    // Hide welcome page elements
    hideContent(welcomeEl);
    hideContent(beginQuizEl);
    // begin timer
    countDown();
    // Show quiz HTML elements
    showContent(questionContainer);
    showContent(answerContainer);

    // The first time through we need to get a question.
    getQuestion();
    // Get the first set of answers.
    getMultipleChoiceAnswers();
    // Wait for a response before jumping into the getAnswer function.
    answerAEl.onclick = getAnswer;
    answerBEl.onclick = getAnswer;
    answerCEl.onclick = getAnswer;
    answerDEl.onclick = getAnswer;

};

var score = function () {
    var totalScore = quizScore + timeCounter;
    if (totalScore < 0) {
        totalScore = 0;
    }
    return totalScore;
};

var endQuiz = function () {
    console.log(score());
    hideContent(timerEl);
    hideContent(questionContainer);
    hideContent(answerContainer);
    console.log("ended");

    showContent(highScoreContainer);

    highScoreEl.textContent = "Quiz Complete! Your score is: " + score();

};

var viewHighScores = function(){
    // If someone viewed highscores without completing the quiz.
    hideContent(timerEl);
    hideContent(questionContainer);
    hideContent(answerContainer);
    hideContent(formEl);
    hideContent(welcomeEl);
    hideContent(beginQuizEl);


    showContent(highScoreContainer);
    var information = document.getElementById("final-information");
    information.textContent = "HighScores: "
    var scores = JSON.parse(localStorage.getItem("highScores"));
    for(var i=0; i < scores.length; i++){
        var item = document.createElement("h4")
        var initialItem = scores[i].inits;
        var highScoreItem = scores[i].score;

        
        item.textContent = initialItem + " - " + highScoreItem;
        highScoreContainer.appendChild(item);
    }

};

var saveHighScore = function (event) {
    event.preventDefault();
    // get initials from form.
    var initials = document.getElementById("initials-input").value;
    // Verify initials are not null
    if (initials) {
        hideContent(formEl);
        // get current user's score
        var timeScore = score();
        // save both initials and score in the scoreObject.
        var scoreObj = {
            inits: initials,
            score: timeScore
        };

        // set the list equal to empty array.
        var highscoreList = [];
        if(localStorage.getItem("highScores")){
            highscoreList = JSON.parse(localStorage.getItem("highScores"));
        }

        // Adds the latest scoreObj to the end of list of scoreObjs.
        highscoreList.push(scoreObj);
        // set your scoreObj into local storage
        localStorage.setItem("highScores", JSON.stringify(highscoreList));
    }

    viewHighScores();
};


    // Event Listeners
    hideContent(timerEl);
    hideContent(questionContainer);
    hideContent(answerContainer);
    hideContent(highScoreContainer);

    beginQuizEl.addEventListener("click", takeQuiz);

    highScoreBtn.addEventListener("click", saveHighScore);

    viewBtn.addEventListener("click", viewHighScores);


