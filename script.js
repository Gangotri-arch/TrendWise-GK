let questions = [

{
    question:"Who is the Prime Minister of India?",

    options:[
        "Rahul Gandhi",
        "Narendra Modi",
        "Amit Shah",
        "Yogi Adityanath"
    ],

    correct:1
},

{
    question:"Which planet is called Red Planet?",

    options:[
        "Earth",
        "Venus",
        "Mars",
        "Jupiter"
    ],

    correct:2
},

{
    question:"Who is known as Father of Nation?",

    options:[
        "Bhagat Singh",
        "Mahatma Gandhi",
        "Subhash Chandra Bose",
        "Jawaharlal Nehru"
    ],

    correct:1
}

];

let currentQuestion = 0;

function loadQuestion(){

    document.getElementById("question").innerHTML =
    questions[currentQuestion].question;

    document.getElementById("option0").innerHTML =
    questions[currentQuestion].options[0];

    document.getElementById("option1").innerHTML =
    questions[currentQuestion].options[1];

    document.getElementById("option2").innerHTML =
    questions[currentQuestion].options[2];

    document.getElementById("option3").innerHTML =
    questions[currentQuestion].options[3];
}

function checkAnswer(option){

    if(option == questions[currentQuestion].correct){
        alert("Correct Answer!");
    }

    else{
        alert("Wrong Answer!");
    }
}

function nextQuestion(){

    if(currentQuestion < questions.length - 1){

        currentQuestion++;

        loadQuestion();
    }
}

function previousQuestion(){

    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();
    }
}

loadQuestion();
