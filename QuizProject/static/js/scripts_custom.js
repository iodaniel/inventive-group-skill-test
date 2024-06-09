
$(document).ready(function() {
    const data = JSON.parse(document.getElementById('questions-data-custom').textContent).questions;

    let currentQuestionIndex = 0;
    let score = 0;
    const quizContainer = $('#quiz-container-custom');
    const submitButton = $('#submit-custom');
    const resultDiv = $('#result-custom');
    const questionCounter = $('#questionCounter-custom');

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
                const div = $('<div>').addClass('form-check');
                const radio = $('<input>').addClass('form-check-input').attr({
                    name: `question${index}-custom`,
                    type: 'radio',
                    id: `option${option}-custom`,
                    value: option
                }).css('float', 'right');
                const optionText = option.split('. ')[1];
                const label = $('<label>').addClass('form-check-label').attr('for', `option${option}-custom`)
                    .append(`<span>${option[0]}.&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;</span>${optionText}`);
                div.append(label).append(radio);
                questionDiv.append(div);
            });

            quizContainer.html(questionDiv);
            questionCounter.text((index + 1) + ' / ' + data.length);
        } else {
            showResult();
        }
    }

    $('#quiz-container-custom').on('change', 'input[type="radio"]', function() {
        if ($('input[type="radio"]:checked').length > 0) {
            resultDiv.hide();
            submitButton.show();
        }
    });

    submitButton.on('click', function() {
        const selectedOption = $('input[name="question' + currentQuestionIndex + '-custom"]:checked').val();
        if (!selectedOption) {
            submitButton.hide();
            resultDiv.text('Please select an answer').addClass('btn btn-grey btn-pill').css({
                'color': 'white',
                'background-color': 'grey',
                'border-radius': '50px',
                'width': '100%',
                'display': 'block'
            }).show();
        } else {
            const optionPrefix = selectedOption.split(". ")[0] + ". ";
            const selectedAnswerText = selectedOption.substring(optionPrefix.length).trim();
            if (selectedAnswerText === data[currentQuestionIndex].correct_answer.trim()) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < data.length) {
                showQuestion(currentQuestionIndex);
            } else {
                showResult();
            }
        }
    });

    function showResult() {
        $('.container').removeClass('shadow');
        const percentage = (score / data.length) * 100;
        submitButton.hide();

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

        const resultTitle = $('<h5>').text('Test completed!').css({
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

        const homeUrl = $('#urlHolder-custom').data('home-url');
        const returnLink = $('<a>').attr('href', homeUrl).css('color', 'red').text('Return Home');

        resultCard.append(resultTitle, scoreLabel, circle, returnLink);
        quizContainer.html(resultCard);
        questionCounter.text(data.length + ' / ' + data.length);
    }

    showQuestion(currentQuestionIndex);
});

