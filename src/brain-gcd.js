import { getRandom } from '../src/index.js';
import { getGCD } from '../src/index.js';
import readlineSync from 'readline-sync';

export const BrainGCD = () =>  {
    const FirstNumber = getRandom(1,100);
    const SecondNumber = getRandom(1,100);
    const CorrectAnswer = getGCD(FirstNumber, SecondNumber );  
    const Answer = readlineSync.question('Question: ' + FirstNumber +' & '+ SecondNumber + '\n' );
    if(CorrectAnswer === Number(Answer)){
        return true;
    }
    else{
        console.log("'" + Answer + "'" + "is wrong answer :( Correct answer was '" + CorrectAnswer + "'" ); 
        return false;
        
    }


      
    




}