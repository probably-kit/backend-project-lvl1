import { getRandom } from '../src/index.js';
import { getProgression } from '../src/index.js';
import readlineSync from 'readline-sync';

export const BrainProgression = () => {
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