// Web Developer Skills Project:
//Author: Daniel Marz 
//Inventive Group Skill Test

// 8 WASTES
// 1.	Overproduction: To produce sooner, faster, or in greater quantities than customer demands.
// 2.	Inventory: Raw material, work in process, or finished goods which are not having value added to it.
// 3.	Waiting: People or parts that wait for a work cycle to be completed.
// 4.	Motion: Unnecessary movement of people, parts or machines within a process.
// 5.	Transportation: Unnecessary movement of people or parts between processes.
// 6.	Defects: Not right the first time. Repetition or correction of a process. Scrap, rework and defects.
// 7.	Over Processing: Processing beyond the standard required by the customer.
// 8.	Talent: Underutilizing people’s talents, skills, and knowledge.
$(document).ready(function() {
    const data = [
        {
            "question": "1. What is Overproduction?",
            "options": [
                "a. To produce sooner, faster, or in greater quantities than customer demands.",
                "b. Production too little.",
                "c. People or parts that wait for a work cycle to be completed.",
                "d. Underutilizing people's talents, skills, and knowledge."
            ],
            "correct_answer": "To produce sooner, faster, or in greater quantities than customer demands."
        },
        {
            "question": "What is Inventory?",
            "options": [
                "a. To produce sooner, faster, or in greater quantities than customer demands.",
                "b. Raw material, work in process, or finished goods which are not having value added to it.",
                "c. People or parts that wait for a work cycle to be completed.",
                "d. Unnecessary movement of people, parts or machines within a process."
            ],
            "correct_answer": "Raw material, work in process, or finished goods which are not having value added to it."
        },
        {
            "question": "What is Waiting?",
            "options": [
                "a. Raw material, work in process, or finished goods which are not having value added to it.",
                "b. Unnecessary movement of people, parts or machines within a process.",
                "c. People or parts that wait for a work cycle to be completed.",
                "d. Processing beyond the standard required by the customer."
            ],
            "correct_answer": "People or parts that wait for a work cycle to be completed."
        },
        {
            "question": "What is Motion?",
            "options": [
                "a. Unnecessary movement of people, parts or machines within a process.",
                "b. Unnecessary movement of people or parts between processes.",
                "c. Underutilizing people’s talents, skills, and knowledge.",
                "d. Processing beyond the standard required by the customer."
            ],
            "correct_answer": "Unnecessary movement of people, parts or machines within a process."
        },
        {
            "question": "What is Transportation?",
            "options": [
                "a. Unnecessary movement of people, parts or machines within a process.",
                "b. Unnecessary movement of people or parts between processes.",
                "c. Underutilizing people’s talents, skills, and knowledge.",
                "d. Processing beyond the standard required by the customer."
            ],
            "correct_answer": "Unnecessary movement of people or parts between processes."
        },
        {
            "question": "What are Defects?",
            "options": [
                "a. Raw material, work in process, or finished goods which are not having value added to it.",
                "b. People or parts that wait for a work cycle to be completed.",
                "c. Not right the first time Repetition or correction of a process Scrap, rework and defects.",
                "d. Processing beyond the standard required by the customer."
            ],
            "correct_answer": "Not right the first time Repetition or correction of a process Scrap, rework and defects."
        },
        
        {
            "question": "What is Over Processing?",
            "options": [
                "a. To produce sooner, faster, or in greater quantities than customer demands.",
                "b. People or parts that wait for a work cycle to be completed.",
                "c. Unnecessary movement of people, parts or machines within a process.",
                "d. Processing beyond the standard required by the customer."
            ],
            "correct_answer": "Processing beyond the standard required by the customer."
        },
        {
            "question": "What is Talent?",
            "options": [
                "a. Unnecessary movement of people or parts between processes.",
                "b. Underutilizing people’s talents, skills, and knowledge.",
                "c. Processing beyond the standard required by the customer.",
                "d. People or parts that wait for a work cycle to be completed."
            ],
            "correct_answer": "Underutilizing people’s talents, skills, and knowledge."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    const quizContainer = $('#quiz-container');
    const submitButton = $('#submit'); // button define in HTMl
    const resultDiv = $('#result'); // Div
    const questionCounter = $('#questionCounter');


   function showQuestion(index) {
        if (index < data.length) {
            const item = data[index];
            const questionDiv = $('<div>').addClass('question mb-3');
    
            const questionTitle = $('<h6>')
                .text(item.question)
                .addClass('text-danger')
                .css('font-weight', 'bold'); 
            questionDiv.append(questionTitle);
    
            const redHr = $('<hr>').css('border-color', 'red');
            questionDiv.append(redHr);
    
            item.options.forEach(option => {
                const div = $('<div>').addClass('form-check'); //This class add the radio selector 
                const radio = $('<input>').addClass('form-check-input').attr({
                    name: `question${index}`,
                    type: 'radio',
                    id: `option${option}`,
                    value: option
                }).css('float', 'right'); 
                const optionText = option.split('. ')[1];
                const label = $('<label>').addClass('form-check-label').attr('for', `option${option}`)
                    .append(`<span>${option[0]}.&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;</span>${optionText}`);//&nbsp is the space that is added top each question after the a. 
                div.append(label).append(radio); // Change the order of the selector 
                questionDiv.append(div);
            });
    
    
            quizContainer.html(questionDiv);
            questionCounter.text((index + 1) + ' / ' + data.length);
        } else {
            showResult();
        }
    }
    
    
    $(document).ready(function() {
        
        $('#quiz-container').on('change', 'input[type="radio"]', function() {
            if ($('input[type="radio"]:checked').length > 0) {
                //sellect an option
                resultDiv.hide(); // hide error message
                submitButton.show(); //show error message
            }
        });
    
        submitButton.on('click', function() {
            const selectedOption = $('input[name="question' + currentQuestionIndex + '"]:checked').val();
            console.log("Selected Option: ", selectedOption);
            if (!selectedOption) {
                //hide send button 
                submitButton.hide();
                // show error message
                resultDiv.text('Please select an answer').addClass('btn btn-grey btn-pill').css({
                    'color': 'white',
                    'background-color': 'grey',
                    'border-radius': '50px',
                    'width': '100%', //style
                    'display': 'block' 
                }).show(); 
            } else {
                // comparation of the answers 
                const optionPrefix = selectedOption.split(". ")[0] + ". ";
                const selectedAnswerText = selectedOption.substring(optionPrefix.length).trim();
                if (selectedAnswerText === data[currentQuestionIndex].correct_answer.trim()) {
                    score++;
                    console.log("Correct Answer! Score: ", score);
                } else {
                    console.log("Wrong Answer! Correct was: ", data[currentQuestionIndex].correct_answer);
                }
                currentQuestionIndex++;
                if (currentQuestionIndex < data.length) {
                    console.log("Moving to next question");
                    showQuestion(currentQuestionIndex);
                } else {
                    console.log("Displaying results");
                    showResult(); 
                }
            }
        });
    });
    
    function showResult() {
        $('.container').removeClass('shadow');
        const percentage = (score / data.length) * 100; // calculate the result in %
        console.log("Final Score: ", score, "Percentage: ", percentage.toFixed(2)); // show the final score
        
        // hide tje sudmit button 
        submitButton.hide();
    
        // create a card for new style
        const resultCard = $('<div>').addClass('result-card').css({
            'width': '200px', 
            'height': '320px', 
            'padding': '10px 10px',
            'margin': '20px auto', 
            'box-shadow': '0px 4px 8px rgba(0, 0, 0, 0.5)',
            'border-radius': '8px', 
            'text-align': 'center', 
            'background-color': 'white' 
        });
    
        //Result title 
        const resultTitle = $('<h5>').text('Tested completed!').css({
            'font-weight': 'bold'
        });
    
        // subtitle
        const scoreLabel = $('<p>').text('Your score:').css({
            'font-weight': 'bold',
            'color': 'grey'
        });
    
        //circle of result
        const circle = $('<div>').addClass('circle').text(`${percentage.toFixed(0)}%`).css({
            'font-size': '40px',
            'line-height': '40px', 
            'height': '150px', 
            'width': '150px',
            'background-color': 'black', 
            'border-radius': '50%', 
            'border': '2px solid #ccc', 
            'margin': '5px auto' 
        });
    
        // Link for return to home page
     
            // Leer el URL desde el atributo de datos y usarlo para crear el enlace
        const homeUrl = $('#urlHolder').data('home-url');
        const returnLink = $('<a>').attr('href', homeUrl).css('color', 'red').text('Return Home');
            // Añadir returnLink al DOM donde necesites
        // const returnLink = $('<a>').attr('href', '').css('color', 'red').text('Return Home');
    
     
        resultCard.append(resultTitle, scoreLabel, circle, returnLink);
        quizContainer.html(resultCard);
        questionCounter.text('8/8');
    }
    
    
    showQuestion(currentQuestionIndex);

});