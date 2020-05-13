// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
  In Counter 1, the variable 'count' is contained in the scope of the function countMaker,
  and the 2nd, lesser function 'counter()' uses it, to add 1 to the variable 'count' each 
  time the function is used. The value will build on itself by 1 each time the funcion runs. 

  In conter2, the variable count is in the global scope of the function "counter2", and 
  because of that, and because there is no inner function that does anything else to the
  variable "count", "count" will reset back to zero after the function has been used. 
  Each time the function is used, the variable to will set at 0, always only equaling 1 after
  it is run. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * They both have closure because the functions have access to the elements they 
 * need in order to run. Counter 1 has variables within its functions scope. Counter 2
 * has a global varaible within it's scope. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * Counter1 would be best if you needed to manipulate a number several times in order
 * to get the correct outcome: if you needed to add to the beginning number, then multiply the
 * newly created number, etc. 
 * Counter2 would be best if you needed your number to always start at zero when using
 * the function. 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team 
scored in an inning. This should be a whole number between 0 and 2. */


function inning(){
 let randomNum=Math.round(Math.random()*2);
 return randomNum;
};
inning();

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function
 `inning` (from above) and a number of innings and and returns the final score of the
  game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, inningNum){
 var scores={};
 
 let homeTeamGameScore=callback*inningNum;
 let awayTeamGameScore=callback*inningNum;

 scores.Home = homeTeamGameScore;
 scores.Away= awayTeamGameScore;


 return scores;
};
finalScore(inning(), 2); 
//(I'm calling the function before entering it into the new one 'inning()' 
//so when it goes in, it's already a number. For it to be a callback, I'd have to initiate it 
//inside the new function 'callback()'  )

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

let inningArray=[1,2,3,4,5, 6, 7, 8, 9];

function scoreboard(callback, inningNum ) {
  
  var scoreByInning= [];

  inningNum.forEach(
    (value, index)=>{
      console.log(`Value per loop: ${value},  Index per loop: ${index}`)
      let awayTeamScore= callback*value;
      let homeTeamScore= callback*inningNum[index];
      scoreByInning.push(` ${inningNum[index]} inning: ${homeTeamScore} - ${awayTeamScore}` );
    }
  )

 return scoreByInning;
}
console.log (scoreboard(inning(), inningArray));


