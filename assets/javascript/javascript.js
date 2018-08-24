// trivia pseudocode
// 1. 5 questions with four answers
// 2. time intervals
// 3. results counter

// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// * If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).



var headsCount = 0;
var tailsCount = 0;
var wins = 0;
var losses = 0;
var time = 10
var intervalId


//The Questions Array Object
var questions = [
    Q1 = {
        question: 'What is JQuery?',
        answerCorrect: 'JQuery can simply be interpreted as most advanced JavaScript framework',
        answer2: 'JQuery is a Jamacian dessert made of Rum',
        answer3: 'JQuery is unimportant in real life applications',
        answer4: 'JQuery is related to SQL databases and Wordpress'
    },
    Q2 = {
        question: 'What does .hide() do in JQuery?',
        answerCorrect: 'It makes the HTML element disappear',
        answer2: 'It empties the HTML element',
        answer3: 'It makes the Infinity Guantlet work',
        answer4: 'All of the above'
    },
    Q3 = {
        question: 'Who makes the iPhone?',
        answerCorrect: 'Apple',
        answer2: 'Google',
        answer3: 'MicroSoft',
        answer4: 'Tesla'
    },
    Q4 = {
        question: 'What is a DOM?',
        answerCorrect: 'Document Object Model',
        answer2: 'The alcohol beverage rappers always drink',
        answer3: 'Something stupid no one cares about',
        answer4: 'All of the above'
    }
];

stop()

function scoreTotal (score) {

    for (var i = 0; i < score.length; i++) {
        
        var correct = [Q1.answerCorrect, Q2.answerCorrect, Q3.answerCorrect, Q4.answerCorrect]

        if (questions.indexOf(correct) === correct) {
            wins++
        } else {
            losses++
        }

    }

}

function startGame () {

    $('.card').hide();
    $('#answer1-button').hide();
    $('#answer2-button').hide();
    $('#answer3-button').hide();
    $('#answer4-button').hide();
    $('#game-rules').text("You'll be given a list of questions to answer. You're going to have 10 seconds to answer each question. If answer all questions correctly, you'll be crown the Lord of Useless Info. If you don't, keep carrying on with your life.  If you choose to accept this challenge, click on Let's Start button to begin.  This message will self-destruct in 10 seconds.");
    $('#start-button').on('click', function(){
        $('#start-button').hide()
        $('#game-rules').hide()
        initialize()
        run()

    });
}

function initialize () {

    // wins--;
    $('.card').show();
    $('#questions-load').append(Q1.question);
    $('#answer1-button').show();
    $('#answer2-button').show();
    $('#answer3-button').show();
    $('#answer4-button').show();
    $('#answer1').append(Q1.answerCorrect);
    $('#answer2').append(Q1.answer2);
    $('#answer3').append(Q1.answer3);
    $('#answer4').append(Q1.answer4);
    // wins++;
    firstQuestion ()
    stop()
}

function firstQuestion () {

    // Correct Answer Button
    $('#answer1-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("You CORRECTLY answered the 1st one!");
        // wins++
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q2.question);
        $('#answer3').append(Q2.answerCorrect);
        $('#answer2').append(Q2.answer2);
        $('#answer1').append(Q2.answer3);
        $('#answer4').append(Q2.answer4);
        $("#correct").html("<h3>" + wins + "</h3>");
        secondQuestion()
        stop()
        run1()
    });

    // Incorrect Answer Button
    $('#answer2-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("1st one is wrong!");
        // losses++
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q2.question);
        $('#answer3').append(Q2.answerCorrect);
        $('#answer2').append(Q2.answer2);
        $('#answer1').append(Q2.answer3);
        $('#answer4').append(Q2.answer4);

        $("#incorrect").html("<h3>" + losses + "</h3>");
        secondQuestion()
        stop()
        run1()
    });

    // Incorrect Answer Button
    $('#answer3-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("1st one is wrong!");
        // losses++
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q2.question);
        $('#answer3').append(Q2.answerCorrect);
        $('#answer2').append(Q2.answer2);
        $('#answer1').append(Q2.answer3);
        $('#answer4').append(Q2.answer4);

        $("#incorrect").html("<h3>" + losses + "</h3>");
        secondQuestion()
        stop()
        run1()
    });

    // Incorrect Answer Button
    $('#answer4-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("1st one is wrong!");
        // losses++
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q2.question);
        $('#answer3').append(Q2.answerCorrect);
        $('#answer2').append(Q2.answer2);
        $('#answer1').append(Q2.answer3);
        $('#answer4').append(Q2.answer4);

        $("#incorrect").html("<h3>" + losses + "</h3>");
        secondQuestion()
        stop()
        run1()

    });
}

function secondQuestion () {

    // Correct Answer Button
    $('#answer3-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("You CORRECTLY answered the 2nd one!");
        // wins++
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q3.question);
        $('#answer2').append(Q3.answerCorrect);
        $('#answer1').append(Q3.answer2);
        $('#answer3').append(Q3.answer3);
        $('#answer4').append(Q3.answer4);

        $("#incorrect").html("<h3>" + wins + "</h3>");
        thirdQuestion ()
        stop()
        run2()
    });

    // Incorrect Answer Button
    $('#answer1-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("2nd one is wrong!");
        // losses++
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q3.question);
        $('#answer2').append(Q3.answerCorrect);
        $('#answer1').append(Q3.answer2);
        $('#answer3').append(Q3.answer3);
        $('#answer4').append(Q3.answer4);

        $("#incorrect").html("<h3>" + losses + "</h3>");
        thirdQuestion ()
        stop()
        run2()
    });

     // Incorrect Answer Button
    $('#answer2-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("2nd one is wrong!");
        // losses++
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q3.question);
        $('#answer2').append(Q3.answerCorrect);
        $('#answer1').append(Q3.answer2);
        $('#answer3').append(Q3.answer3);
        $('#answer4').append(Q3.answer4);

        $("#incorrect").html("<h3>" + losses + "</h3>");
        thirdQuestion ()
        stop()
        run2()
    });

     // Incorrect Answer Button
    $('#answer4-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("2nd one is wrong!");
        // losses++
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q3.question);
        $('#answer2').append(Q3.answerCorrect);
        $('#answer1').append(Q3.answer2);
        $('#answer3').append(Q3.answer3);
        $('#answer4').append(Q3.answer4);

        $("#incorrect").html("<h3>" + losses + "</h3>");
        thirdQuestion ()
        stop()
        run2()
    });
}

function thirdQuestion () {

    // Correct Answer Button
    $('#answer2-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("You CORRECTLY answered the 3rd one!");
        // wins++
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q4.question);
        $('#answer2').append(Q4.answerCorrect);
        $('#answer1').append(Q4.answer2);
        $('#answer3').append(Q4.answer3);
        $('#answer4').append(Q4.answer4);
        $("#incorrect").html("<h3>" + wins + "</h3>");
        fourthQuestion ()
        stop()
        run3()
    });

    // Incorrect Answer Button
    $('#answer1-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("3rd one is wrong!");
        // losses++
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q4.question);
        $('#answer2').append(Q4.answerCorrect);
        $('#answer1').append(Q4.answer2);
        $('#answer3').append(Q4.answer3);
        $('#answer4').append(Q4.answer4);
        $("#incorrect").html("<h3>" + losses + "</h3>");
        fourthQuestion ()
        stop()
        run3()

    });

     // Incorrect Answer Button
    $('#answer3-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("3rd one is wrong!");
        // losses++
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q4.question);
        $('#answer2').append(Q4.answerCorrect);
        $('#answer1').append(Q4.answer2);
        $('#answer3').append(Q4.answer3);
        $('#answer4').append(Q4.answer4);
        
        $("#incorrect").html("<h3>" + losses + "</h3>");
        fourthQuestion ()
        stop()
        run3()

    });

     // Incorrect Answer Button
    $('#answer4-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("3rd one is wrong!");
        // losses++
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q4.question);
        $('#answer2').append(Q4.answerCorrect);
        $('#answer1').append(Q4.answer2);
        $('#answer3').append(Q4.answer3);
        $('#answer4').append(Q4.answer4);
        
        $("#incorrect").html("<h3>" + losses + "</h3>");
        fourthQuestion ()
        stop()
        run3()
    });

}

function fourthQuestion () {

    $('#answer2-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("You CORRECTLY answered the last one!");
        // wins++
        $('#questions-load').empty();
        $('.card').hide();
        $('#answer1-button').hide();
        $('#answer2-button').hide();
        $('#answer3-button').hide();
        $('#answer4-button').hide();

        $("#incorrect").html("<h3>" + wins + "</h3>");
        stop()
        // run4()
        setTimeout(function() {
            alert("You got " + wins + " questions right and you got " + losses + " wrong.");
          }, 300);
        time = 0
    });

    $('#answer4-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("4th one is wrong!");
        // losses++
        $('#questions-load').empty();
        $('.card').hide();
        $('#answer1-button').hide();
        $('#answer2-button').hide();
        $('#answer3-button').hide();
        $('#answer4-button').hide();

        $("#incorrect").html("<h3>" + losses + "</h3>");
        stop()
        // run4()
        setTimeout(function() {
            alert("You got " + wins + " questions right and you got " + losses + " wrong.");
          }, 300);
        time = 0
    });

    $('#answer1-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("4th one is wrong!");
        // losses++
        $('#questions-load').empty();
        $('.card').hide();
        $('#answer1-button').hide();
        $('#answer2-button').hide();
        $('#answer3-button').hide();
        $('#answer4-button').hide();

        $("#incorrect").html("<h3>" + losses + "</h3>");
        stop()
        // run4()
        setTimeout(function() {
            alert("You got " + wins + " questions right and you got " + losses + " wrong.");
          }, 300);
        time = 0
    });

    $('#answer3-button').on('click', function(){
        // scoreTotal()
        $('#announce').text("4th one is wrong!");
        // losses++
        $('#questions-load').empty();
        $('.card').hide();
        $('#answer1-button').hide();
        $('#answer2-button').hide();
        $('#answer3-button').hide();
        $('#answer4-button').hide();
        $("#incorrect").html("<h3>" + losses + "</h3>");
        stop()
        // run4()
        setTimeout(function() {
            alert("You got " + wins + " questions right and you got " + losses + " wrong.");
          }, 300);
        time = 0
    });

}

function run() {
    if (time === 0) {
        time = 10
    }
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $("#time-left").html("<h2>" + time + "</h2>");
  }

function decrement() {
    if (time !== 0) {
    time--;
    $("#time-left").html("<h2>" + time + "</h2>");
    } else {
        alert('Time is Up!')
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q2.question);
        $('#answer3').append(Q2.answerCorrect);
        $('#answer2').append(Q2.answer2);
        $('#answer1').append(Q2.answer3);
        $('#answer4').append(Q2.answer4);
        run1()
    }
}

function run1() {
    if (time === 0) {
        time = 10
    }
    clearInterval(intervalId);
    intervalId = setInterval(decrement1, 1000);
    $("#time-left").html("<h2>" + time + "</h2>");
  }

function decrement1() {
    if (time !== 0) {
    time--;
    $("#time-left").html("<h2>" + time + "</h2>");
    } else {
        alert('Time is Up!')
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q3.question);
        $('#answer2').append(Q3.answerCorrect);
        $('#answer1').append(Q3.answer2);
        $('#answer3').append(Q3.answer3);
        $('#answer4').append(Q3.answer4);
        run2()
    }
}

function run2() {
    if (time === 0) {
        time = 10
    }
    clearInterval(intervalId);
    intervalId = setInterval(decrement2, 1000);
    $("#time-left").html("<h2>" + time + "</h2>");
  }

function decrement2() {
    if (time !== 0) {
    time--;
    $("#time-left").html("<h2>" + time + "</h2>");
    } else {
        alert('Time is Up!')
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q4.question);
        $('#answer2').append(Q4.answerCorrect);
        $('#answer1').append(Q4.answer2);
        $('#answer3').append(Q4.answer3);
        $('#answer4').append(Q4.answer4);
        run3()
    }
}

function run3() {
    if (time === 0) {
        time = 10
    }
    clearInterval(intervalId);
    intervalId = setInterval(decrement3, 1000);
    $("#time-left").html("<h2>" + time + "</h2>");
  }

function decrement3() {
    if (time !== 0) {
    time--;
    $("#time-left").html("<h2>" + time + "</h2>");
    } else {
        alert('Time is Up!')
        setTimeout(function() {
        alert("You got " + wins + " questions right and you got " + losses + " wrong.");
          }, 300);
        $('#announce').empty();
        $('#announce').text("You MISSED the last one!");
        $('#questions-load').empty();
        $('#answer1').empty();
        $('#answer2').empty();
        $('#answer3').empty();
        $('#answer4').empty();
        $('#questions-load').append(Q4.question);
        $('#answer2').append(Q4.answerCorrect);
        $('#answer1').append(Q4.answer2);
        $('#answer3').append(Q4.answer3);
        $('#answer4').append(Q4.answer4);
        time = 0
        stop()
        startGame()
    }
}

// function run4() {
//     if (time === 0) {
//         time = 10
//     }
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement4, 1000);
//     $("#time-left").html("<h2>" + time + "</h2>");
//   }

// function decrement4() {
//     if (time !== 0) {
//     time--;
//     $("#time-left").html("<h2>" + time + "</h2>");
//     } else {
//         alert('Time is Up!')
//         $('#questions-load').empty();
//         $('.card').hide();
//         $('#answer1-button').hide();
//         $('#answer2-button').hide();
//         $('#answer3-button').hide();
//         $('#answer4-button').hide();
//         stop()
//         location.reload();
//     }
// }

function stop() {
    if (time !== 0 || time !== 10) {
        time = 10
    }
    clearInterval(intervalId);
}

$('#play-again-button').on('click', function () {
    location.reload();
})

startGame()