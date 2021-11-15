import readlineSync from 'readline-sync';
import cli from './cli.js';
import {BrainCalc} from '../bin/brain-calc.js';
import {BrainEven} from '../bin/brain-even.js';


export const getRandom = () => {
    const result = Math.round(Math.random() * 100);
    return result;
}

console.log('Welcome to the Brain Games!');
const name = cli();

const games = ['Brain-Even','Brain-Calc'];

let CurrentGame;

for(const game of games){
    
    let counter = 0;
    for(; counter < 3; counter += 1){
        switch(game){
            case 'Brain-Even': CurrentGame = BrainEven();
            console.log('Answer "yes" if the number is even, otherwise answer "no".');                    
            break;
            case 'Brain-Calc': CurrentGame = BrainCalc();
            console.log('What is the result of the expression?');
            break;
            default: console.log(':('); break;
        }
    
        if(CurrentGame === true){
            console.log('Correct!');
        }
        else{
            console.log("Let's try again, " + name + "!");
            break;
        }   
    }

    if( counter === 3){
        console.log('Congratulates,'+ name +'!\n');
    }
}
