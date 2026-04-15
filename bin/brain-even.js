#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { runGreet } from '../src/cli.js';

const name = runGreet();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const runGame = () => {
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

runGame();
