$(document).ready(function() {
// Variables in Global Scope
var quizTimer = 90;
var intervalId;
var choices;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var officeTrivia = [
    { 
        question: "What type of farm does Dwight own?",
        choices: ["Potato Farm", "Beet Farm", "Beetle Farm", "Strawberry Farm"],
        answer: 1
    },

    {
        question: "How long were Pam and Roy engaged?",
        choices: ["3 months", "6 Years", "4-5 months", "3-4 years"],
        answer: 3
    },

    {
        question: "What name did Pam and Angela fight over for their babies?",
        choices: ["Andrew", "William", "John", "Phillip"],
        answer: 3
    },

    {
        question: "Where does Jim confess his feelings to Pam?",
        choices:["The warehouse", "The office", "Jim's car", "The office parking lot"],
        answer: 3
    },
    
    {
        question: "Which of Angela's cats does Dwight freeze?",
        choices:["Bandit", "Sparkles", "Sprinkles", "Sally"],
        answer: 2
    },
    
    {
        question: "What tattoo is Andy forced to get?",
        choices:["A naked man", "A butterfly", "A nard dog", "The Cornell logo"],
        answer: 2
    },
    
    {
        question: "Which coworker was having an affair with Angela's fiancé, the senator?",
        choices:["Andy", "Kelly", "Oscar", "Erin"],
        answer: 2
    },
    
    {
        question: "Who ruined Pam's pregnancy secret during her wedding weekend?",
        choices:["Jim", "Michael", "Andy", "Dwight"],
        answer: 0
    },
    
    {
        question: "Which office employee did Michael hit with his car?",
        choices:["Meredith", "Angela", "Stanley", "Ryan"],
        answer: 0
    },
    
    {
        question: "Who does Toby have a major crush on in the series?",
        choices:["Erin", "Pam", "Kelly", "Angela"],
        answer: 1
    },
]

// Create timer countdown function
function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
}

// Decreasing timer by 1 sec
function decrement() {
    quizTimer--;
    $("#time").html("<h2>Time is ticking!: " + quizTimer + " seconds left</h2>" + "<br>");

        if (quizTimer === 0) {
        stop();
    }
}

// Stop function which will clear the interval
function stop() {
    clearInterval(intervalId);
}

});