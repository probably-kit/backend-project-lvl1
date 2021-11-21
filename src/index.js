import readlineSync from 'readline-sync';
import cli from './cli.js';
import {BrainCalc} from '../bin/brain-calc.js';
import {BrainEven} from '../bin/brain-even.js';
import {BrainGCD} from '../bin/brain-gcd.js';
import { BrainProgression } from '../bin/brain-progression.js';

export const getRandom = (min, max) => {
        
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      
      
}

console.log('Welcome to the Brain Games!');
const name = cli();

const games = ['Brain-Even','Brain-Calc','Brain-GCD','Brain-Progression'];

let CurrentGame = true;

for(const game of games){
    
    let counter = 0; 

    if(CurrentGame === false){
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

        case 'Brain-Progression': 
        console.log('What number is missing in the progression?');
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
