#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {getRandom} from '../src/index.js';

const getGCD = (FirstNumber, SecondNumber) => {
    
    if( FirstNumber > SecondNumber ){
        for(let counter = SecondNumber; counter > 0; counter -= 1) {
            if((FirstNumber % counter === 0) & (SecondNumber % counter === 0)){
              const result = counter;
                return result;
            }
        }

    }
    else if (FirstNumber === SecondNumber) return FirstNumber;
    else {
        for(let counter = FirstNumber; counter > 0; counter -= 1) {
            if((FirstNumber % counter === 0) & (SecondNumber % counter === 0)){
              const result = counter;
                return result;
            }
        }
    }

    
}


export const BrainGCD = () =>{
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