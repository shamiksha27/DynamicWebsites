let questions = [
    {
        q: "HTML stands for?",
        options: ["Hyper Text Markup Language", "High Text Machine", "Home Tool", "None"],
        answer: 0
    },
    {
        q: "CSS is used for?",
        options: ["Structure", "Design", "Logic", "Database"],
        answer: 1
    }
];

let current = 0;
let score = 0;

function loadQuestion() {
    let q = questions[current];
    document.getElementById("question").innerText = q.q;

    for (let i = 0; i < 4; i++) {
        document.getElementById("opt" + i).innerText = q.options[i];
    }
}

function checkAnswer(i) {
    if (i === questions[current].answer) {
        score++;
    }

    current++;

    if (current < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quizBox").innerHTML =
            "Quiz Finished! Score: " + score;
    }
}

loadQuestion();