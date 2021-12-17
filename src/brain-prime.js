import { getRandom } from '../src/index.js';
import readlineSync from 'readline-sync';

export const BrainPrime = () => {
    const PrimeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    const RandomNumber = getRandom(1,100);
    let CorrectAnswer;
    if(PrimeNumbers.includes(RandomNumber)){
        CorrectAnswer = 'yes';
    }
    else{
        CorrectAnswer = 'no';
    }

    const Answer = readlineSync.question('Question: ' + RandomNumber +' \n' );

    if(CorrectAnswer === Answer){
        return true;
    }
    else {
        console.log("'" + Answer + "'" + "is wrong answer :( Correct answer was '" + CorrectAnswer + "'" ); 
        return false;
        
    }
    
}
