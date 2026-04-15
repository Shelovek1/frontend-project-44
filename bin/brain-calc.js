#!/usr/bin/env node

import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)

console.log('What is the result of the expression?')

const roundsCount = 3
const operations = ['+', '-', '*']

const getRandomNumber = () => Math.floor(Math.random() * 100)
const getRandomOperation = () => operations[Math.floor(Math.random() * operations.length)]

const calculate = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operation: ${op}`)
  }
}

for (let i = 0; i < roundsCount; i += 1) {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const operator = getRandomOperation()

  const correctAnswer = calculate(num1, num2, operator)

  console.log(`Question: ${num1} ${operator} ${num2}`)
  const userAnswer = readlineSync.question('Your answer: ')

  if (Number(userAnswer) !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${name}!`)
    process.exit(1)
  }

  console.log('Correct!')
}

console.log(`Congratulations, ${name}!`)
