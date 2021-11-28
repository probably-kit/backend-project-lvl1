#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {getRandom} from '../src/index.js';

const getRandomMathAction = () =>{
    const value = getRandom(1,100);
    if(value <= 33) return '+';
    else if (value > 33 & value <= 66) return '-';
    else if (value > 66) return '*';
}

export const BrainCalc = () =>{
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


