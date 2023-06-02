const readLine = require('readline-sync');

let diceRolled = [];
let eyeColors = ['blue', 'green', 'brown', 'hazel'];
let Class = ['Villain', 'Hero', 'Healer', 'Knight', 'Queen', 'King', 'Wizard'];
let specialSkill = ['Running', 'Killing', 'Interrogation', 'Dancing', 'Archery', 'Horse Rider', 'Stealth'];
let age = [14, 1534, 832, 892, 2, 192, 0, 92, 423];
let character1 = {
    //empty for now
};
let character2 = {

};
let character3 = {

};

createChar(character1, diceRolled);
createChar(character2, diceRolled);
createChar(character3, diceRolled);
function rolld6(){
    return Math.ceil(Math.random()*6);
}

function rollDice(amount, list) {
    for (let i = 0; i < amount; i++) {
        let roll = rolld6();
        // console.log(`You rolled a ${roll}!`);
        list.push(roll);
    }
}

function sum(list){
    let sum = 0;
    for(let i = 0; i < list.length; i++){
        sum+=list[i]
    }
    // console.log(`The total was: ${sum}.`);
    return sum;
}

function rollStat(list){
    list = [];
    rollDice(3, list);
    return sum(list);
}

function pickRandomChoice(choices){
    let randomNum = Math.floor(Math.random()*choices.length);
    return choices[randomNum];
}

function createChar(character, list){
    character.name = readLine.question("Enter Character Name: ");
    character.eyeColor = pickRandomChoice(eyeColors);
    // console.log("Rolling Strength");
    character.strength = rollStat(diceRolled);
    // console.log("Rolling Dexterity");
    character.dexterity = rollStat(diceRolled);
    // console.log("Rolling Constitution");
    character.constitution = rollStat(diceRolled);
    // console.log("Rolling Intelligence");
    character.intelligence = rollStat(diceRolled);
    // console.log("Rolling Wisdom");
    character.wisdom = rollStat(diceRolled);
    // console.log("Rolling Charisma");
    character.charisma = rollStat(diceRolled);
    character.luck = rolld6();
    character.class = pickRandomChoice(Class);
    character.specialskill = pickRandomChoice(specialSkill);
    character.age = pickRandomChoice(age);
    displayChar(character);
}

function displayChar(char){
    console.log(`----------------------------`);
    console.log(`Name: ${char.name}`);
    console.log(`Eye Color: ${char.eyeColor}`);
    console.log(`STR: ${char.strength}`);
    console.log(`DEX: ${char.dexterity}`);
    console.log(`CON: ${char.constitution}`);
    console.log(`INT: ${char.intelligence}`);
    console.log(`WIS: ${char.wisdom}`);
    console.log(`CHAR: ${char.charisma}`);
    console.log(`LUCK: ${char.luck}`);
    console.log(`Class: ${char.class}`);
    console.log(`Special Skill: ${char.specialskill}`);
    console.log(`Age: ${char.age}`);
    console.log(`----------------------------`);
}