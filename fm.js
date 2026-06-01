#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'manager> '
})

console.log("=== Текстовый Файловый Менеджер v1.0 ===");
console.log("Доступные команды: ls, cd, cat, mkdir, rm, exit");
rl.prompt();

rl.on('line', (line) => {
    const [cmd, arg] = line.trim().split(/\s+/);

    try {
        switch (cmd) {
            case 'ls':
                const files = fs.readdirSync(process.cwd());
                console.log("Файлы:", files.join(' | '));
                break;

            case 'cd':
                process.chdir(path.resolve(process.cwd(), arg || '.'));
                console.log("Перешли в:", process.cwd());
                break;

            case 'cat':
                const text = fs.readFileSync(path.resolve(process.cwd(), arg), 'utf8');
                console.log("\n--- Содержимое ---\n", text, "\n-----------------");
                break;

            case 'mkdir':
                fs.mkdirSync(path.resolve(process.cwd(), arg));
                console.log(`Папка "${arg}" создана`);
                break;

            case 'rm':
                fs.rmSync(path.resolve(process.cwd(), arg), { recursive: true });
                console.log(`Объект "${arg}" удален`);
                break;

            case 'exit':
                rl.close();
                break;

            default:
                if (cmd) console.log("Неизвестная команда:", cmd);
        }
    } catch (err) {

        console.log("Ошибка:", err.message);
    }

    rl.prompt();
})

rl.on('close', () => {
    console.log("Программа закрыта.");
    process.exit(0);
})