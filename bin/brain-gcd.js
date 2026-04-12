#!/usr/bin/env node

console.log('START');

import readlineSync from 'readline-sync';
import gcd from '../src/gcd.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Find the greatest common divisor of given numbers.');

const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < 3; i++) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);

    console.log(`Question: ${num1} ${num2}`);

    const correctAnswer = gcd(num1, num2);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        process.exit();
    }

    console.log('Correct!');
}

console.log(`Congratulations, ${name}!`);
