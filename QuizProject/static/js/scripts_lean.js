
//Author: Daniel Marz
//Inventive group Skill Test 

// LEAN TERMINOLOGY
//1•	6S: Study, sort, shine, set in order, standardize, and sustain.
//2 •	Andon: A visual light used to show the current status of a machine or process.
//3 •	Current State: Current condition of anything. How something is currently being done.
//4 •	Defects: Waste of inspection, repair, and scrapping of material to which value has already been added.
//5 •	FIFO: First in, first out.
// 6•	Five Whys: Asking five why questions to get to the root cause of a problem.
// 7•	Flow: Move or process in a forward motion.
// 8•	Future state: The condition we imagine something can be in once changes have taken place.
// 9•	Gemba: “The real place” the place where work occurs.
// 10•	Hai: “I accept the challenge.”
//11 •	Hansei: “Reflection”. Reflect on what went right or what went wrong. Make changes if needed and try something else.
//12 •	Heijunka: A process to help manage production by leveling peaks and valleys of customer demand.
// 13•	Kaizen: Many small changes for the better, created by the people that do the work.
// 14•	Kanban: A visual system that shows you to replace what has been consumed.

$(document).ready(function() {
    const lean_data = 
        [
            {
                "question": "What is 6S?",
                "options": [
                    "a. The process to manage production by leveling customer demands.",
                    "b. A visual system that indicates when to replace resources.",
                    "c. Study, sort, shine, set in order, standardize, and sustain.",
                    "d. A technique involving asking multiple why questions to reach the root cause of a problem."
                ],
                "correct_answer": "Study, sort, shine, set in order, standardize, and sustain."
            },
            {
                "question": "What is an Andon in LEAN terminology?",
                "options": [
                    "a. A process to help manage production by leveling peaks and valleys of customer demand.",
                    "b. A visual light used to show the current status of a machine or process.",
                    "c. The place where work occurs.",
                    "d. A system for reflecting on successes and failures."
                ],
                "correct_answer": "A visual light used to show the current status of a machine or process."
            },
            {
                "question": "What does 'Current State' refer to?",
                "options": [
                    "a. The imagined future condition of a process after improvements.",
                    "b. The initial input order in a production line.",
                    "c. Current condition of anything How something is currently being done.",
                    "d. A condition of unnecessary movement within a process."
                ],
                "correct_answer": "Current condition of anything How something is currently being done."
            },
            {
                "question": "What are 'Defects' in LEAN?",
                "options": [
                    "a. Waste of inspection, repair, and scrapping of material to which value has already been added.",
                    "b. A visual tool to indicate required replacements in inventory.",
                    "c. The various stages of cleaning and organizing a workspace.",
                    "d. Unnecessary delays in a process due to poor management."
                ],
                "correct_answer": "Waste of inspection, repair, and scrapping of material to which value has already been added."
            },
            {
                "question": "What does FIFO stand for?",
                "options": [
                    "a. First in, first out.",
                    "b. Follow internal flow operations.",
                    "c. Find information, find out.",
                    "d. Final input, first output."
                ],
                "correct_answer": "First in, first out."
            },
            {
                "question": "What is the purpose of the 'Five Whys'?",
                "options": [
                    "a. To determine five areas of improvement.",
                    "b. Asking five why questions to get to the root cause of a problem.",
                    "c. To identify five key stakeholders in a process.",
                    "d. To categorize defects into five types."
                ],
                "correct_answer": "Asking five why questions to get to the root cause of a problem."
            },
            {
                "question": "What does 'Flow' refer to in LEAN?",
                "options": [
                    "a. The financial aspects of LEAN.",
                    "b. Move or process in a forward motion.",
                    "c. The mapping of future states in a process.",
                    "d. The level adjustments in production demand."
                ],
                "correct_answer": "Move or process in a forward motion."
            },
            {
                "question": "What does 'Future state' mean?",
                "options": [
                    "a. A strategy for managing past discrepancies.",
                    "b. The condition we imagine something can be in once changes have taken place.",
                    "c. The state of resource consumption before replenishment.",
                    "d. The initial setup of a workplace before 6S implementation."
                ],
                "correct_answer": "The condition we imagine something can be in once changes have taken place."
            },
            {
                "question": "What is 'Gemba'?",
                "options": [
                    "a. A reflective practice in LEAN.",
                    "b. The real place where work occurs.",
                    "c. A methodology for reducing waste.",
                    "d. A planning technique for future state scenarios."
                ],
                "correct_answer": "The real place where work occurs."
            },
            {
                "question": "What does 'Hai' signify in LEAN?",
                "options": [
                    "a. A type of visual management tool.",
                    "b. The acceptance of a challenge.",
                    "c. A systematic approach to leveling production.",
                    "d. The principles of continuous improvement."
                ],
                "correct_answer": "The acceptance of a challenge."
            },
            
                {
                    "question": "What is 'Hansei' in LEAN terminology?",
                    "options": [
                        "a. A visual system to manage inventory.",
                        "b. The process of making small incremental changes.",
                        "c. Reflection to understand what went right or wrong.",
                        "d. A method to increase production speed."
                    ],
                    "correct_answer": "Reflection to understand what went right or wrong."
                },
                {
                    "question": "What does 'Heijunka' mean in LEAN manufacturing?",
                    "options": [
                        "a. The use of visual tools to enhance production flow.",
                        "b. Leveling the type and quantity of production over a fixed period.",
                        "c. The technique of reflecting on errors and fixing them.",
                        "d. A strategy to employ all resources without waste."
                    ],
                    "correct_answer": "Leveling the type and quantity of production over a fixed period."
                },
                {
                    "question": "What is 'Kaizen'?",
                    "options": [
                        "a. A philosophy that focuses on continuous improvement.",
                        "b. A system to visually display production quotas.",
                        "c. The practice of leveling production schedules.",
                        "d. A methodology for rapid innovation."
                    ],
                    "correct_answer": "A philosophy that focuses on continuous improvement."
                },
                {
                    "question": "What is 'Kanban' used for in LEAN processes?",
                    "options": [
                        "a. To reflect on project outcomes and adjust processes.",
                        "b. To level workload among team members.",
                        "c. To visually manage workflow and inventory.",
                        "d. To identify defects in the production process."
                    ],
                    "correct_answer": "To visually manage workflow and inventory."
                }
            
            
    ]
    
            

    let currentQuestionIndex = 0;
    let score = 0;
     // Verify if elements exist in the DOM
     if($('#quizLean').length === 0) {
        console.error('quizLean element does not exist.');
    }
    if($('#submitLean').length === 0) {
        console.error('submitLean button does not exist.');
    }
    const quizLean = $('#quizLean');
    const submitButtonLean = $('#submitLean'); 
    const resultDivLean = $('#resultLean'); // Div
    const questionCounterLean = $('#questionCounterLean');


   function showQuestion(index) {
        if (index < lean_data.length) {
            const itemLean = lean_data[index];
            const questionDivLean = $('<div>').addClass('question mb-3');
    
            const questionTitleLean = $('<h6>')
                .text(itemLean.question)
                .addClass('text-danger')
                .css('font-weight', 'bold'); 
            questionDivLean.append(questionTitleLean);
    
            const redHrLean = $('<hr>').css('border-color', 'red');
            questionDivLean.append(redHrLean);
    
            itemLean.options.forEach(option => {
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
                div.append(label).append(radio); 
                questionDivLean.append(div);
            });
    
    
            quizLean.html(questionDivLean);
            questionCounterLean.text((index + 1) + ' / ' + lean_data.length);
        } else {
            showResult();
        }
    }
       
$(document).ready(function() {
    $('#quizLean').on('change', 'input[type="radio"]', function() {
        console.log("Radio button changed:", $(this).val()); 
        if ($('input[type="radio"]:checked').length > 0) {
            resultDivLean.hide();
            submitButtonLean.show();
        }
    });

    submitButtonLean.on('click', function() {
        const selectedOption = $('input[name="question' + currentQuestionIndex + '"]:checked').val();
        console.log("Submit button clicked, selected option:", selectedOption); 

        if (!selectedOption) {
            submitButtonLean.hide();
            resultDivLean.text('Please select an answer').addClass('btn btn-grey btn-pill').css({
                'color': 'white',
                'background-color': 'grey',
                'border-radius': '50px',
                'width': '100%',
                'display': 'block'
            }).show();
        } else {
            const optionPrefix = selectedOption.split(". ")[0] + ". ";
            const selectedAnswerText = selectedOption.substring(optionPrefix.length).trim();
            console.log("Comparing:", selectedAnswerText, "to correct answer:", lean_data[currentQuestionIndex].correct_answer.trim());

            if (selectedAnswerText === lean_data[currentQuestionIndex].correct_answer.trim()) {
                score++;
                console.log("Correct Answer! Score:", score);
            } else {
                console.log("Wrong Answer! Correct answer was:", lean_data[currentQuestionIndex].correct_answer);
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < lean_data.length) {
                showQuestion(currentQuestionIndex);
            } else {
                showResult();
            }
        }
    });
});

    
    function showResult() {
        $('.container').removeClass('shadow');
        const percentage = (score / lean_data.length) * 100; 
        console.log("Final Score: ", score, "Percentage: ", percentage.toFixed(2)); 
        
        submitButtonLean.hide();
    
        
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
    
        
        const resultTitle = $('<h5>').text('Tested completed!').css({
            'font-weight': 'bold'
        });
    
        const scoreLabel = $('<p>').text('Your score:').css({
            'font-weight': 'bold',
            'color': 'grey'
        });
    
    
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
    
        const homeUrl = $('#urlHolder').data('home-url');
        const returnLink = $('<a>').attr('href', homeUrl).css('color', 'red').text('Return Home');
        // const returnLink = $('<a>').attr('href', "{% url '' %}").css('color', 'red').text('Return Home');
   
        resultCard.append(resultTitle, scoreLabel, circle, returnLink);
        quizLean.html(resultCard);
        questionCounterLean.text('14/14'); 
    }
    
    
    showQuestion(currentQuestionIndex);

});