import readlineSync from 'readline-sync';
import cli from './cli.js';
import {BrainCalc} from '../bin/brain-calc.js';
import {BrainEven} from '../bin/brain-even.js';
import {BrainGCD} from '../bin/brain-gcd.js';

export const getRandom = () => {
    const result = Math.round(Math.random() * 100);
    return result;
}

console.log('Welcome to the Brain Games!');
const name = cli();

const games = ['Brain-Even','Brain-Calc','Brain-GCD'];

let CurrentGame = true;

for(const game of games){
    
    let counter = 0; 

    if(CurrentGame === false){
        console.log("Let's try again, " + name + "!");
        break;
    }


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
            default: console.log(':('); break;
        }
    
        if(CurrentGame === true){
            console.log('Correct!');
        }
        else { 
            break;
        }

    }

    if( counter === 3){
        console.log('Congratulates,'+ name +'!\n');
    }
}
