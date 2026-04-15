#!/usr/bin/env node

import readlineSync from 'readline-sync'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateProgression(length = 10) {
  const start = getRandomInt(1, 20)
  const step = getRandomInt(1, 10)
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  const hiddenIndex = getRandomInt(0, length - 1)
  const answer = progression[hiddenIndex]
  progression[hiddenIndex] = '..'
  return { question: progression.join(' '), answer }
}

function brainProgressionGame() {
  console.log('Welcome to the Brain Progression Game!')
  const rounds = 3

  for (let i = 0; i < rounds; i++) {
    const { question, answer } = generateProgression()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (parseInt(userAnswer, 10) === answer) {
      console.log('Correct!\n')
    }
    else {
      console.log(`Wrong! The correct answer was ${answer}.`)
      console.log('Game over!')
      return
    }
  }

  console.log('Congratulations, you won!')
}

brainProgressionGame()
