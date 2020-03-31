$(document).ready(function() {
// Variables in Global Scope
var quizTimer = 30;
var intervalId;
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
        choices: ["3 months", "6 years", "4-5 months", "3-4 years"],
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

// Start button function
$("#start-btn").on("click", function() {
    $(this).hide();
    $("#inst").hide();
    $("#time").html("<h2>Time Remaining: 30 Seconds</h2>" + "<br>");
    
    startTimer();

    // Display questions & choices 
    $("#q1").html("<h3>" + officeTrivia[0].question + "</h3>");
    $("#a1").html("<input type='radio' name='a1' value='0'>" + "<label>" + officeTrivia[0].choices[0] + "</label>"
        + "<input type='radio' name='a1' value='1'>" + "<label>" + officeTrivia[0].choices[1] + "</label>"
        + "<input type='radio' name='a1' value='2'>" + "<label>" + officeTrivia[0].choices[2] + "</label>"
        + "<input type='radio' name='a1' value='3'>" + "<label>" + officeTrivia[0].choices[3] + "</label><br><br>"
    );
    
    $("#q2").html("<h3>" + officeTrivia[1].question + "</h3>");
    $("#a2").html("<input type='radio' name='a2' value='0'>" + "<label>" + officeTrivia[1].choices[0] + "</label>"
        + "<input type='radio' name='a2' value='1'>" + "<label>" + officeTrivia[1].choices[1] + "</label>"
        + "<input type='radio' name='a2' value='2'>" + "<label>" + officeTrivia[1].choices[2] + "</label>"
        + "<input type='radio' name='a2' value='3'>" + "<label>" + officeTrivia[1].choices[3] + "</label><br><br>"
    );
    
    $("#q3").html("<h3>" + officeTrivia[2].question + "</h3>");
    $("#a3").html("<input type='radio' name='a3' value='0'>" + "<label>" + officeTrivia[2].choices[0] + "</label>"
        + "<input type='radio' name='a3' value='1'>" + "<label>" + officeTrivia[2].choices[1] + "</label>"
        + "<input type='radio' name='a3' value='2'>" + "<label>" + officeTrivia[2].choices[2] + "</label>"
        + "<input type='radio' name='a3' value='3'>" + "<label>" + officeTrivia[2].choices[3] + "</label><br><br>"
    );
    
    $("#q4").html("<h3>" + officeTrivia[3].question + "</h3>");
    $("#a4").html("<input type='radio' name='a4' value='0'>" + "<label>" + officeTrivia[3].choices[0] + "</label>"
        + "<input type='radio' name='a4' value='1'>" + "<label>" + officeTrivia[3].choices[1] + "</label>"
        + "<input type='radio' name='a4' value='2'>" + "<label>" + officeTrivia[3].choices[2] + "</label>"
        + "<input type='radio' name='a4' value='3'>" + "<label>" + officeTrivia[3].choices[3] + "</label><br><br>"
    );
    
    $("#q5").html("<h3>" + officeTrivia[4].question + "</h3>");
    $("#a5").html("<input type='radio' name='a5' value='0'>" + "<label>" + officeTrivia[4].choices[0] + "</label>"
        + "<input type='radio' name='a5' value='1'>" + "<label>" + officeTrivia[4].choices[1] + "</label>"
        + "<input type='radio' name='a5' value='2'>" + "<label>" + officeTrivia[4].choices[2] + "</label>"
        + "<input type='radio' name='a5' value='3'>" + "<label>" + officeTrivia[4].choices[3] + "</label><br><br>"
    );
    
    $("#q6").html("<h3>" + officeTrivia[5].question + "</h3>");
    $("#a6").html("<input type='radio' name='a6' value='0'>" + "<label>" + officeTrivia[5].choices[0] + "</label>"
        + "<input type='radio' name='a6' value='1'>" + "<label>" + officeTrivia[5].choices[1] + "</label>"
        + "<input type='radio' name='a6' value='2'>" + "<label>" + officeTrivia[5].choices[2] + "</label>"
        + "<input type='radio' name='a6' value='3'>" + "<label>" + officeTrivia[5].choices[3] + "</label><br><br>"
    );
    
    $("#q7").html("<h3>" + officeTrivia[6].question + "</h3>");
    $("#a7").html("<input type='radio' name='a7' value='0'>" + "<label>" + officeTrivia[6].choices[0] + "</label>"
        + "<input type='radio' name='a7' value='1'>" + "<label>" + officeTrivia[6].choices[1] + "</label>"
        + "<input type='radio' name='a7' value='2'>" + "<label>" + officeTrivia[6].choices[2] + "</label>"
        + "<input type='radio' name='a7' value='3'>" + "<label>" + officeTrivia[6].choices[3] + "</label><br><br>"
    );
    
    $("#q8").html("<h3>" + officeTrivia[7].question + "</h3>");
    $("#a8").html("<input type='radio' name='a8' value='0'>" + "<label>" + officeTrivia[7].choices[0] + "</label>"
        + "<input type='radio' name='a8' value='1'>" + "<label>" + officeTrivia[7].choices[1] + "</label>"
        + "<input type='radio' name='a8' value='2'>" + "<label>" + officeTrivia[7].choices[2] + "</label>"
        + "<input type='radio' name='a8' value='3'>" + "<label>" + officeTrivia[7].choices[3] + "</label><br><br>"
    );
    
    $("#q9").html("<h3>" + officeTrivia[8].question + "</h3>");
    $("#a9").html("<input type='radio' name='a9' value='0'>" + "<label>" + officeTrivia[8].choices[0] + "</label>"
        + "<input type='radio' name='a9' value='1'>" + "<label>" + officeTrivia[8].choices[1] + "</label>"
        + "<input type='radio' name='a9' value='2'>" + "<label>" + officeTrivia[8].choices[2] + "</label>"
        + "<input type='radio' name='a9' value='3'>" + "<label>" + officeTrivia[8].choices[3] + "</label><br><br>"
    );
    
    $("#q10").html("<h3>" + officeTrivia[9].question + "</h3>");
    $("#a10").html("<input type='radio' name='a10' value='0'>" + "<label>" + officeTrivia[9].choices[0] + "</label>"
        + "<input type='radio' name='a10' value='1'>" + "<label>" + officeTrivia[9].choices[1] + "</label>"
        + "<input type='radio' name='a10' value='2'>" + "<label>" + officeTrivia[9].choices[2] + "</label>"
        + "<input type='radio' name='a10' value='3'>" + "<label>" + officeTrivia[9].choices[3] + "</label><br><br>"
    );

    $("#submit").html("<button>Submit</button>")
    $("#submit").on("click", function() {
        scoreChk(); 
        stop();
        showResults();
    })
})

// Create timer countdown function
function startTimer() {
    clearInterval(intervalId);

    // Decreasing timer by 1 sec
    intervalId = setInterval(decrement, 1000)
}

// Timer decreaser
function decrement() {
    quizTimer--;
    $("#time").html("<h2>Time Remaining: " + quizTimer + " Seconds</h2>" + "<br>");

        if (quizTimer === 0) {

        scoreChk();
        stop();
    }
}

// Stop function which will clear the interval
function stop() {
    clearInterval(intervalId);
    showResults();
}

// Score checker
function scoreChk() {
    var userChoices = [
        $("input[name='a1']:checked").val(),
        $("input[name='a2']:checked").val(),
        $("input[name='a3']:checked").val(),
        $("input[name='a4']:checked").val(),
        $("input[name='a5']:checked").val(),
        $("input[name='a6']:checked").val(),
        $("input[name='a7']:checked").val(),
        $("input[name='a8']:checked").val(),
        $("input[name='a9']:checked").val(),
        $("input[name='a10']:checked").val()
    ]

    for (i = 0; i < officeTrivia.length; i++){
        if (userChoices[i] === undefined) {
            unanswered++;
        }
        else if (userChoices[i] == officeTrivia[i].answer) {
            correctAnswer++;
        }
        else {
            incorrectAnswer++;
        }
    }
}

// Show results only, hide everyting else
function showResults() {
    $("#time").hide();
    $("#q1").hide();
    $("#q2").hide();
    $("#q3").hide();
    $("#q4").hide();
    $("#q5").hide();
    $("#q6").hide();
    $("#q7").hide();
    $("#q8").hide();
    $("#q9").hide();
    $("#q10").hide();
    $("#a1").hide();
    $("#a2").hide();
    $("#a3").hide();
    $("#a4").hide();
    $("#a5").hide();
    $("#a6").hide();
    $("#a7").hide();
    $("#a8").hide();
    $("#a9").hide();
    $("#a10").hide();
    $("#submit").hide();

    $("#results").html("<h2>Here are your results!</h2>");
    $("#correct").html("Correct Answers: " + correctAnswer);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswer);
    $("#unanswered").html("Unanswered Questions: " + unanswered);

}

});