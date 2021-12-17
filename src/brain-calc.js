import {getRandomMathAction} from '../src/index.js';
import { getRandom } from '../src/index.js';
import readlineSync from 'readline-sync';

export const BrainCalc = () => {
    const FirstNumber = getRandom(1,100);
    const SecondNumber = getRandom(1,100);
    const MathAction = getRandomMathAction();
    let CorrectAnswer;
    console.log('Question:', FirstNumber, MathAction,SecondNumber );
    switch(MathAction){
        case '+': CorrectAnswer = FirstNumber + SecondNumber;  break;
        case '-': CorrectAnswer = FirstNumber - SecondNumber; break;
        case '*': CorrectAnswer = FirstNumber * SecondNumber; break;
        default: console.log('Mistake');break;
    }
    const answer = readlineSync.question('Print your answer \n');
    if(CorrectAnswer === Number(answer)){
        
        return true;
    }
    else{
        console.log("'" + answer + "'" + "is wrong answer :( Correct answer was '" + CorrectAnswer + "'" ); 
        return false;
        
    }
    
}