// Examples from Javascript.info (first reading)

function makeUser() {
    return {
        name: "John",
        ref() {
        return this;
        }
    };
}

let user = makeUser();

console.log( user.ref().name );

//un-comment below and refresh page to see calculator

/*let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('First Number?', 0);
        this.b =+prompt('Second Number?', 0);
    }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );*/

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};

//uncomment then refresh page to see results
//ladder.up().up().down().showStep().down().showStep();


// Novice Ninja Chpt:5 Chpt:6 & Chpt:7 Modifications



const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
];

const view = { // added in Chpt 6
    start: document.getElementById('start'), //added in Chpt:7
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target,content,attributes) {
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){//added in Chpt:7
        element.style.display = 'block';
    },
    hide(element){//added in Chpt:7
        element.style.display = 'none';
    }
};

const game = {
    start(quiz){
        this.questions = [...quiz];
        this.score = 0;
        view.hide(view.start);//added in Chpt:7
        view.show(view.start);//added in Chpt:7
        // main game loop
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    //Modified below in Chpt 6
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question,question);
        const response =  prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.realName;
        if(response === answer){
        view.render(view.result,'Correct!',{'class':'correct'});
        alert('Correct!');
        this.score++;
        view.render(view.score,this.score);
        } else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver(){
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}

game.start(quiz);

view.start.addEventListener('click', () => game.start(quiz), false); //added in Chpt:7

