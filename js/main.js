const links = [{
    label: 'Week 1 Notes',
    url: 'week1/week1.html',
}
,
{
    label: 'Week 2 Notes',
    url: 'week2/week2.html',
},
{
    label: 'Week 2 Team',
    url: 'week2/teamW2.html',
}
{
    label: 'Week 3 Team',
    url: 'week3/teamW3.html',
}];


const ol = document.getElementById('assignments');

links.forEach(link => {
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.setAttribute('href', link.url);
    a.innerText = link.label;

    li.appendChild(a);
    ol.appendChild(li);
});

//nav

// Quiz Ninja Programing Basics
/*const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);*/

//Quiz Ninja Arrays
/*const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

let score = 0 // initialize score

for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);*/

//Quiz Ninja Functions
/*const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

function start(quiz){
    let score = 0;

    // main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop

    gameOver();

    // function declarations
    function ask(question){
        return prompt(question);
    }

    function check(response,answer){
        if(response === answer){
        alert('Correct!');
        score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
start(quiz);*/