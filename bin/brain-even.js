import readlineSync from 'readline-sync';
const getRandom = () => {
    const result = Math.round(Math.random() * 100);
    return result;
}

const IsEven = (number) =>{
    if(number % 2 === 0){
        return true;
    }
    else return false;
}

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let counter = 0
for(; counter < 3; counter += 1){
    const number = getRandom();
    console.log('Question:', number );
    const answer = readlineSync.question('Print your answer \n');
    if(IsEven(number) === true){
        if( answer === 'yes') console.log('Correct!');
        else if(answer === 'no') {
            console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'Let\'s try again, Bill!');
            break;
        }
        else {
            console.log('You can only write \'yes\' or \'no\'');
            break;
        }
        
    }
    else{
        
        if( answer === 'no') console.log('Correct!');
        else if(answer === 'yes'){ 
            console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'Let\'s try again, Bill!');
            break;
         }
         else {
            console.log('You can only write \'yes\' or \'no\'');
            break;
        }      
    }

}

if(counter === 3){
    console.log('Congratulations!');
}
