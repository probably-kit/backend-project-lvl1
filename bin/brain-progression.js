import readlineSync from 'readline-sync';
import {getRandom} from '../src/index.js';

const getProgression = () => {
    let AmountOf_Elements = getRandom(5, 15);

    const FirstElement = getRandom(1,100);
    const CommonDifference = getRandom(1,100);
    const Progression = [FirstElement];

    for (let counter = 0; counter < AmountOf_Elements-1; counter += 1){
        Progression[counter + 1] = Progression[counter] + CommonDifference;
    }
    return Progression;
}


export const BrainProgression = () =>{
    const Progression = getProgression();
    const secretElement = getRandom(0, Progression.length - 1);
    const CorrectAnswer = Progression[secretElement];
    Progression[secretElement] = '..';
    const Answer = readlineSync.question('Question: '+ Progression + ' \n' );

    if(CorrectAnswer === Number(Answer)){
        return true;
    }
    else {
        console.log("'" + Answer + "'" + "is wrong answer :( Correct answer was '" + CorrectAnswer + "'" ); 
        return false;
        
    }
    
}