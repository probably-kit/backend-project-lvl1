import readlineSync from 'readline-sync';
import cli from './cli.js';
 import {BrainCalc} from './brain-calc.js';
 import {BrainEven} from './brain-even.js';
 import {BrainGCD} from './brain-gcd.js';
 import { BrainProgression } from './brain-progression.js';
 import { BrainPrime } from './brain-prime.js';

export const getRandom = (min, max) => {
        
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      
      
}

export const IsEven = (number) => {
    if(number % 2 === 0){
        return true;
    }
    else return false;
}

export const getRandomMathAction = () => {
    const value = getRandom(1,100);
    if(value <= 33) return '+';
    else if (value > 33 & value <= 66) return '-';
    else if (value > 66) return '*';
}

export const getGCD = (FirstNumber, SecondNumber) => {
    
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

export const getProgression = () => {
    let AmountOf_Elements = getRandom(5, 15);

    const FirstElement = getRandom(1,100);
    const CommonDifference = getRandom(1,100);
    const Progression = [FirstElement];

    for (let counter = 0; counter < AmountOf_Elements-1; counter += 1){
        Progression[counter + 1] = Progression[counter] + CommonDifference;
    }
    return Progression;
}

export const gameStart  = (game) =>{

console.log('Welcome to the Brain Games!');
const name = cli();

// const games = ['Brain-Even','Brain-Calc','Brain-GCD','Brain-Progression','Brain-Prime'];

let CurrentGame = true;

let counter = 0; 

    switch(game){
        case 'Brain-Even': 
        console.log('Answer "yes" if the number is even, otherwise answer "no".');              
        break;

        case 'Brain-Calc': 
        console.log('What is the result of the expression?');
        break;

        case 'Brain-GCD': 
        console.log('Find the greatest common divisor of given numbers');
        break;

        case 'Brain-Progression': 
        console.log('What number is missing in the progression?');
        break;

        case 'Brain-Prime': 
        console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
        break;

        default: console.log(':('); break;
    }

    
    for(; counter < 3; counter += 1){
    
        switch(game){
            case 'Brain-Even': 
            CurrentGame = BrainEven();               
            break;
    
            case 'Brain-Calc': 
            CurrentGame = BrainCalc();
            break;
    
            case 'Brain-GCD': 
            CurrentGame = BrainGCD();
            break;

            case 'Brain-Progression': 
            CurrentGame = BrainProgression();
            break;

            case 'Brain-Prime': 
            CurrentGame = BrainPrime();               
            break;

            default: console.log(':('); break;
        }
    
        if(CurrentGame === true){
            console.log('Correct!');
        }
        else { 
            console.log("Let's try again, " + name + "!");
            break;
        }

    }

    if( counter === 3){
        console.log('Congratulates,'+ name +'!\n');
    
    }
}


