const prompt = require("prompt-sync")({sigint: true});
const fs = require('fs');

const welcomeMessage = fs.readFileSync('./ASCIIart.txt', 'utf8');

const today = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day = days[today.getDay()];
const date = today.getDate();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const month = months[today.getMonth()];
const year = today.getFullYear();

const messages = {
    day: ["wonderful", "beautiful", "gloomy", "bad", "splendid", "horrible", "nice", "bright", "happy", "pleasant"],
    todo: ["spend time with friends/family", "stay at home", "go outside", "watch Netflix", "be productive", "workout", "have some cake", "take a spa day", "read a book", "have a drink"]
}

function generateRandomIndex(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
}

function generateRandomMessage() {
    let dayMessage, todoMessage, notTodoMessage, finalMessage, userName;
    dayMessage = messages.day[generateRandomIndex(messages.day)];
    todoMessage = messages.todo[generateRandomIndex(messages.todo)];
    do {
        notTodoMessage = messages.todo[generateRandomIndex(messages.todo)];
    } while (notTodoMessage === todoMessage);
    console.log(welcomeMessage);
    userName = prompt("What's your name? ");
    finalMessage = `\nHello ${userName}!\n\nIt's ${day}, ${month} ${date}, ${year}.\nHere's what the day brings for you:\n\nIt's a ${dayMessage} day. You should definitely ${todoMessage} and do not ${notTodoMessage}!`;
    console.log(finalMessage);
}

generateRandomMessage();