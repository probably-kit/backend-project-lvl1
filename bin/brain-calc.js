import readlineSync from 'readline-sync';
import {getRandom} from '../src/index.js';

const getRandomMathAction = () =>{
    const value = getRandom();
    if(value <= 33) return '+';
    else if (value > 33 & value <= 66) return '-';
    else if (value > 66) return '*';
}

export const BrainCalc = () =>{
    const FirstNumber = getRandom();
    const SecondNumber = getRandom();
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


