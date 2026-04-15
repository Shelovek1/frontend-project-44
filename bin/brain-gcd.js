#!/usr/bin/env node

import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)

console.log('Find the greatest common divisor of given numbers.')

const roundsCount = 3

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

// Алгоритм Евклида
const gcd = (a, b) => {
  let x = a
  let y = b

  while (y !== 0) {
    const temp = y
    y = x % y
    x = temp
  }

  return x
}

for (let i = 0; i < roundsCount; i += 1) {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()

  const correctAnswer = gcd(num1, num2)

  console.log(`Question: ${num1} ${num2}`)
  const answer = readlineSync.question('Your answer: ')

  if (Number(answer) !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${name}!`)
    process.exit(1)
  }

  console.log('Correct!')
}

console.log(`Congratulations, ${name}!`)
