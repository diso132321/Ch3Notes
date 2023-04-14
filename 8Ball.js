const readLine = require('readLine-sync');


//explanation on how to play
console.log("This is a magic 8 ball. Ask it a question and it will respond with an answer. Question:");


//these will be our answers
let answerList = ['It is certain.', ' It is decidedly so.', 'Without a doubt.', 'Yes definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.',
'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.',
'Don`t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];


//the question
readLine.question('');


//this will be the number generator
let randomNum = Math.floor(Math.random()*answerList.length);
let randomAns = answerList[randomNum];
console.log(randomAns);