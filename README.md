# code-quiz-challenge

This challenge was to create a JavaScript quiz where a user could save highscores.

## Description

This challenge relied heavily on learning the DOM and manipulating HTML elements through JavaScript.

## Acceptance Criteria
GIVEN I am taking a code quiz

WHEN I click the start button
THEN a timer starts and I am presented with a question

WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0
THEN the game is over

WHEN the game is over
THEN I can save my initials and score

## Additional Information
### Notes
I really wanted to use a for loop to iterate over the quiz questions, but for loops are not designed to stop and "wait" for a button click. I tried using setTimeout to get the for loop to stop executing for 5 seconds but that unfortunately did not work. Breaking up the different pieces of the quiz into getQuestion and getAnswers was the trick because then you could have the program wait for a button click before proceeding.

### Mock Up
![HighScore Display](./assets/images/HighScores.png?raw=true "HighScores")

### Access Application
You can find the quiz here:
*  https://isibee.github.io/code-quiz-challenge/

You can find the code here:
* https://github.com/IsiBee/code-quiz-challenge/

