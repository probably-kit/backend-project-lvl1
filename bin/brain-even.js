import readlineSync from 'readline-sync';
import {getRandom} from '../src/index.js';


const IsEven = (number) =>{
    if(number % 2 === 0){
        return true;
    }
    else return false;
}




export const BrainEven= () => {
    const number = getRandom();
    console.log('Question:', number );
    const answer = readlineSync.question('Print your answer \n');
    if(IsEven(number) === true){
        if( answer === 'yes') {
            return true;
        }
        else if(answer === 'no') {
            console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'');
            return false;
        }
        else {
            console.log('You can only write \'yes\' or \'no\'');
            return false;
        }
        
    }
    else{
        
        if( answer === 'no') {
            return true;
        }
        else if(answer === 'yes'){ 
            console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'');
            return false;
         }
         else {
            console.log('You can only write \'yes\' or \'no\'');
            return false;
        }      
    }

}