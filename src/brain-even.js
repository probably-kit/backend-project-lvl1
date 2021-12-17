import {getRandom} from '../src/index.js';
import {IsEven} from '../src/index.js';
import readlineSync from 'readline-sync';


export const BrainEven = () => {
    const number = getRandom(1,100);
    console.log('Question:', number );
    const Answer = readlineSync.question('Print your answer \n');

    let CorrectAnswer;
    if(IsEven(number)){
        CorrectAnswer = 'yes';
    }
    else{
        CorrectAnswer = 'no';
    }

    
    if(CorrectAnswer === Answer){
        return true;
    }
    else {
        console.log("'" + Answer + "'" + "is wrong answer :( Correct answer was '" + CorrectAnswer + "'" ); 
        return false;
    
    }

}