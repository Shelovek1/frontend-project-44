#!/usr/bin/env node

import readlineSync from 'readline-sync'

function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function brainPrimeGame() {
    console.log('Welcome to the Brain Prime Game!')
    const rounds = 3

    for (let i = 0; i < rounds; i++) {
        const question = getRandomInt(1, 100)
        console.log(`Question: ${question}`)
        const userAnswer = readlineSync.question('Is it prime? (yes/no): ').toLowerCase()

        const correctAnswer = isPrime(question) ? 'yes' : 'no'

        if (userAnswer === correctAnswer) {
            console.log('Correct!\n')
        }
        else {
            console.log(`Wrong! The correct answer was '${correctAnswer}'.`)
            console.log('Game over!')
            return
        }
    }

    console.log('Congratulations, you won!')
}

brainPrimeGame()
