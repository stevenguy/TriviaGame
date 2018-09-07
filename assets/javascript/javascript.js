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
var time = 10;
var intervalId;


//The Questions Array Object
var questions = [
    Q1 = {
        question: 'What is JQuery?',
        answerCorrect: 'JQuery can simply be interpreted as most advanced JavaScript framework',
        answer2: 'JQuery is a Jamacian dessert made of Rum',
        answer3: 'JQuery is unimportant in real life applications',
        answer4: 'JQuery is related to SQL databases and Wordpress',
        right: 1,
        wrong: 1
    },
    Q2 = {
        question: 'What does .hide() do in JQuery?',
        answerCorrect: 'It makes the HTML element disappear',
        answer2: 'It empties the HTML element',
        answer3: 'It makes the Infinity Guantlet work',
        answer4: 'All of the above',
        right: 1,
        wrong: 1
    },
    Q3 = {
        question: 'Who makes the iPhone?',
        answerCorrect: 'Apple',
        answer2: 'Google',
        answer3: 'MicroSoft',
        answer4: 'Tesla',
        right: 1,
        wrong: 1
    },
    Q4 = {
        question: 'What is a DOM?',
        answerCorrect: 'Document Object Model',
        answer2: 'The alcohol beverage rappers always drink',
        answer3: 'Something stupid no one cares about',
        answer4: 'All of the above',
        right: 1,
        wrong: 1
    }
];

stop()

function startGame () {

    $('.card').hide();
    $('.row1').hide();
    $('.row2').hide();
    $('.row3').hide();
    $('.row4').hide();
    $('.row5').hide();
    $('.row6').hide();
    $('.row7').hide();
    $('.row8').hide();
    $('.row9').hide();
    $('.row10').hide();
    $('.row11').hide();
    $('.row12').hide();
    $('.row13').hide();
    $('.row14').hide();
    $('.row15').hide();
    $('.row16').hide();
    $('#answer1').append(Q1.answerCorrect);
    $('#answer2').append(Q1.answer2);
    $('#answer3').append(Q1.answer3);
    $('#answer4').append(Q1.answer4);
    $('#answer7').append(Q2.answerCorrect);
    $('#answer6').append(Q2.answer2);
    $('#answer5').append(Q2.answer3);
    $('#answer8').append(Q2.answer4);
    $('#answer10').append(Q3.answerCorrect);
    $('#answer9').append(Q3.answer2);
    $('#answer11').append(Q3.answer3);
    $('#answer12').append(Q3.answer4);
    $('#answer15').append(Q4.answerCorrect);
    $('#answer13').append(Q4.answer2);
    $('#answer14').append(Q4.answer3);
    $('#answer16').append(Q4.answer4);
    $('#game-rules').text("You'll be given a list of questions to answer. You're going to have 10 seconds to answer each question. If answer all questions correctly, you'll be crown the Lord of Useless Info. If you don't, keep carrying on with your life.  If you choose to accept this challenge, click on Let's Start button to begin.  This message will self-destruct in 10 seconds.");
    $('#start-button').click(function(){
        $('#start-button').hide()
        $('#game-rules').hide()
        initialize()
        run()
    });
}

function initialize () {

    $('.card').show();
    $('#questions-load').append(Q1.question);
    $('.row1').show();
    $('.row2').show();
    $('.row3').show();
    $('.row4').show();
    firstQuestion ()
    stop()
}

function firstQuestion () {

    // Correct Answer Button
    $('#answer1-button').click(function(){
        $('#announce').text("You CORRECTLY answered the 1st one!");
        $('.row1').hide();
        $('.row2').hide();
        $('.row3').hide();
        $('.row4').hide();
        $('.row5').show();
        $('.row6').show();
        $('.row7').show();
        $('.row8').show();
        $('#correct').empty()
        $('#correct').append(parseInt(wins = wins + Q1.right));
        $('#questions-load').empty();
        $('#questions-load').append(Q2.question);
        secondQuestion()
        stop()
        run1()
    });

    // Incorrect Answer Button
    $('#answer2-button').click(function(){
        $('#announce').text("1st one is wrong!");
        $('.row1').hide();
        $('.row2').hide();
        $('.row3').hide();
        $('.row4').hide();
        $('.row5').show();
        $('.row6').show();
        $('.row7').show();
        $('.row8').show();
        $('#incorrect').empty()
        $('#incorrect').append(parseInt(losses = losses + Q1.wrong));
        $('#questions-load').empty();
        $('#questions-load').append(Q2.question);
        secondQuestion()
        stop()
        run1()
    });

    // Incorrect Answer Button
    $('#answer3-button').click(function(){
        $('#announce').text("1st one is wrong!");
        $('.row1').hide();
        $('.row2').hide();
        $('.row3').hide();
        $('.row4').hide();
        $('.row5').show();
        $('.row6').show();
        $('.row7').show();
        $('.row8').show();
        $('#incorrect').empty()
        $('#incorrect').append(parseInt(losses = losses + Q1.wrong));
        $('#questions-load').empty();
        $('#questions-load').append(Q2.question);
        secondQuestion()
        stop()
        run1()
    });

    // Incorrect Answer Button
    $('#answer4-button').click(function(){
        $('#announce').text("1st one is wrong!");
        $('.row1').hide();
        $('.row2').hide();
        $('.row3').hide();
        $('.row4').hide();
        $('.row5').show();
        $('.row6').show();
        $('.row7').show();
        $('.row8').show();
        $('#incorrect').empty()
        $('#incorrect').append(parseInt(losses = losses + Q1.wrong));
        $('#questions-load').empty();
        $('#questions-load').append(Q2.question);
        secondQuestion()
        stop()
        run1()

    });
}

function secondQuestion () {

    // Correct Answer Button
    $('#answer7-button').click(function(){
        $('#announce').text("You CORRECTLY answered the 2nd one!");
        $('.row5').hide();
        $('.row6').hide();
        $('.row7').hide();
        $('.row8').hide();
        $('.row9').show();
        $('.row10').show();
        $('.row11').show();
        $('.row12').show();
        $('#correct').empty()
        $('#correct').append(parseInt(wins = wins + Q2.right));
        $('#questions-load').empty();
        $('#questions-load').append(Q3.question);
        thirdQuestion ()
        stop()
        run2()
    });

    // Incorrect Answer Button
    $('#answer5-button').click(function(){
        $('#announce').text("2nd one is wrong!");
        $('.row5').hide();
        $('.row6').hide();
        $('.row7').hide();
        $('.row8').hide();
        $('.row9').show();
        $('.row10').show();
        $('.row11').show();
        $('.row12').show();
        $('#incorrect').empty()
        $('#incorrect').append(parseInt(losses = losses + Q2.wrong));
        $('#questions-load').empty();
        $('#questions-load').append(Q3.question);
        thirdQuestion ()
        stop()
        run2()
    });

     // Incorrect Answer Button
    $('#answer6-button').click(function(){
        $('#announce').text("2nd one is wrong!");
        $('.row5').hide();
        $('.row6').hide();
        $('.row7').hide();
        $('.row8').hide();
        $('.row9').show();
        $('.row10').show();
        $('.row11').show();
        $('.row12').show();
        $('#incorrect').empty()
        $('#incorrect').append(parseInt(losses = losses + Q2.wrong));
        $('#questions-load').empty();
        $('#questions-load').append(Q3.question);
        thirdQuestion ()
        stop()
        run2()
    });

     // Incorrect Answer Button
    $('#answer8-button').click(function(){
        $('#announce').text("2nd one is wrong!");
        $('.row5').hide();
        $('.row6').hide();
        $('.row7').hide();
        $('.row8').hide();
        $('.row9').show();
        $('.row10').show();
        $('.row11').show();
        $('.row12').show();
        $('#incorrect').empty()
        $('#incorrect').append(parseInt(losses = losses + Q2.wrong));
        $('#questions-load').empty();
        $('#questions-load').append(Q3.question);
        thirdQuestion ()
        stop()
        run2()
    });
}

function thirdQuestion () {

    // Correct Answer Button
    $('#answer10-button').click(function(){
        $('#announce').text("You CORRECTLY answered the 3rd one!");
        $('.row9').hide();
        $('.row10').hide();
        $('.row11').hide();
        $('.row12').hide();
        $('.row13').show();
        $('.row14').show();
        $('.row15').show();
        $('.row16').show();
        $('#correct').empty()
        $('#correct').append(parseInt(wins = wins + Q3.right));
        $('#questions-load').empty();
        $('#questions-load').append(Q4.question);
        fourthQuestion ()
        stop()
        run3()
    });

    // Incorrect Answer Button
    $('#answer9-button').click(function(){
        $('#announce').text("3rd one is wrong!");
        $('.row9').hide();
        $('.row10').hide();
        $('.row11').hide();
        $('.row12').hide();
        $('.row13').show();
        $('.row14').show();
        $('.row15').show();
        $('.row16').show();
        $('#incorrect').empty()
        $('#incorrect').append(parseInt(losses = losses + Q3.wrong));
        $('#questions-load').empty();
        $('#questions-load').append(Q4.question);
        fourthQuestion ()
        stop()
        run3()

    });

     // Incorrect Answer Button
    $('#answer11-button').click(function(){
        $('#announce').text("3rd one is wrong!");
        $('.row9').hide();
        $('.row10').hide();
        $('.row11').hide();
        $('.row12').hide();
        $('.row13').show();
        $('.row14').show();
        $('.row15').show();
        $('.row16').show();
        $('#incorrect').empty()
        $('#incorrect').append(parseInt(losses = losses + Q3.wrong));
        $('#questions-load').empty();
        $('#questions-load').append(Q4.question);
        fourthQuestion ()
        stop()
        run3()

    });

     // Incorrect Answer Button
    $('#answer12-button').click(function(){
        $('#announce').text("3rd one is wrong!");
        $('.row9').hide();
        $('.row10').hide();
        $('.row11').hide();
        $('.row12').hide();
        $('.row13').show();
        $('.row14').show();
        $('.row15').show();
        $('.row16').show();
        $('#incorrect').empty()
        $('#incorrect').append(parseInt(losses = losses + Q3.wrong));
        $('#questions-load').empty();
        $('#questions-load').append(Q4.question);
        fourthQuestion ()
        stop()
        run3()
    });

}

function fourthQuestion () {

    $('#answer15-button').click(function(){
        $('#announce').text("You CORRECTLY answered the last one!");
        $('#correct').empty()
        $('#correct').append(parseInt(wins = wins + Q4.right));
        $('#questions-load').empty();
        $('.card').hide();
        $('.row13').hide();
        $('.row14').hide();
        $('.row15').hide();
        $('.row16').hide();
        stop()
        setTimeout(function() {
            alert("You got " + wins + " questions right and you got " + losses + " wrong.");
          }, 300);
        time = 0
    });

    $('#answer16-button').click(function(){
        $('#announce').text("4th one is wrong!");
        $('#incorrect').empty()
        $('#incorrect').append(parseInt(losses = losses + Q4.wrong));
        $('#questions-load').empty();
        $('.card').hide();
        $('.row13').hide();
        $('.row14').hide();
        $('.row15').hide();
        $('.row16').hide();
        stop()
        setTimeout(function() {
            alert("You got " + wins + " questions right and you got " + losses + " wrong.");
          }, 300);
        time = 0
    });

    $('#answer13-button').click(function(){
        $('#announce').text("4th one is wrong!");
        $('#incorrect').empty()
        $('#incorrect').append(parseInt(losses = losses + Q4.wrong));
        $('#questions-load').empty();
        $('.card').hide();
        $('.row13').hide();
        $('.row14').hide();
        $('.row15').hide();
        $('.row16').hide();
        stop()
        setTimeout(function() {
            alert("You got " + wins + " questions right and you got " + losses + " wrong.");
          }, 300);
        time = 0
    });

    $('#answer14-button').click(function(){
        $('#announce').text("4th one is wrong!");
        $('#incorrect').empty()
        $('#incorrect').append(parseInt(losses = losses + Q4.wrong));
        $('#questions-load').empty();
        $('.card').hide();
        $('.row13').hide();
        $('.row14').hide();
        $('.row15').hide();
        $('.row16').hide();
        stop()
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
        $('#announce').empty();
        $('#announce').text("You didn't answer the 1st question!");
        $('#questions-load').empty();
        $('#questions-load').append(Q2.question);
        $('.row1').hide();
        $('.row2').hide();
        $('.row3').hide();
        $('.row4').hide();
        $('.row5').show();
        $('.row6').show();
        $('.row7').show();
        $('.row8').show();
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
        $('#announce').empty();
        $('#announce').text("You didn't answer the 2nd one!");
        $('#questions-load').empty();
        $('#questions-load').append(Q3.question);
        $('.row5').hide();
        $('.row6').hide();
        $('.row7').hide();
        $('.row8').hide();
        $('.row9').show();
        $('.row10').show();
        $('.row11').show();
        $('.row12').show();
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
        $('#announce').empty();
        $('#announce').text("You didn't answer the 3rd one!");
        $('#questions-load').empty();
        $('#questions-load').append(Q4.question);
        $('.row9').hide();
        $('.row10').hide();
        $('.row11').hide();
        $('.row12').hide();
        $('.row13').show();
        $('.row14').show();
        $('.row15').show();
        $('.row16').show();
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
        $('#announce').text("You didn't answer the last one! Try it again!");
        $('#questions-load').empty();
        $('#questions-load').append(Q4.question);
        $('.row9').hide();
        $('.row10').hide();
        $('.row11').hide();
        $('.row12').hide();
        $('.row13').show();
        $('.row14').show();
        $('.row15').show();
        $('.row16').show();
        time = 0
        stop()
        startGame()
    }
}

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