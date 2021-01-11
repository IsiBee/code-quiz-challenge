# code-quiz-challenge

This challenge was to create a JavaScript quiz where a user could save highscores.

## Description

This challenge relied heavily on learning the DOM and ability to manipulate HTML elements through JavaScript.

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
### The Difficulties
I ran into a wall with this challenge because I really wanted to use a for loop to iterate over the quiz questions. I tried to get the for loop to stop executing for 5 seconds but that did not work. Finally I broke up the different pieces of this challenge into individual functions and was able to make the quiz not advance until a question had been answered.

I think there is still some refactoring work that can be done here, I used the hide and show functions pretty heavily and there seems to be some redundancy there. 

### Mock Up
![HighScore Display](./assets/images/HighScores.png?raw=true "HighScores")

### Access Application
You can find the quiz here:
*  https://isibee.github.io/code-quiz-challenge/

You can find the code here:
* https://github.com/IsiBee/code-quiz-challenge/

