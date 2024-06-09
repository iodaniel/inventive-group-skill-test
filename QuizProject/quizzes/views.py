from django.shortcuts import render, redirect, get_object_or_404
from .models import Test, Question
# from .forms import TestForm, QuestionFormSet 

def home(request):
    tests = Test.objects.all()
    return render(request, 'quiz/index.html', {'tests': tests})


def quiz(request, test_id):
    # Logic to fetch questions based on test_id
    data = {}  # Fetch your data based on test_id
    return render(request, 'quiz/quiz.html', {'data': data})

def waste(request):
        # Logic for the 8 wastes view
    return render(request, 'quiz/8wastes.html')

def lean(request):
        # Logic for the 8 wastes view
    return render(request, 'quiz/leanTerminology.html')

# def create_test_url(request):
#     return render(request, 'quiz/create_test.html')

def custom(request, test_id):
    test = get_object_or_404(Test, id=test_id)
    questions = Question.objects.filter(test=test)
    return render(request, 'quiz/custom.html', {'test': test, 'questions': questions})

# quizzes/views.py
# from django.shortcuts import render, redirect, get_object_or_404
# from .models import Test, Question
from django.shortcuts import render, redirect, get_object_or_404
from .models import Test, Question
import logging

logger = logging.getLogger(__name__)

def create_test(request):
    if request.method == 'POST':
        test_name = request.POST.get('test_name')
        print(f'Test Name: {test_name}')
        
        if test_name:
            test = Test.objects.create(name=test_name)
            print(f'Test created with ID: {test.id}')
        else:
            print('Test name is missing')
            return render(request, 'quizzes/create_test.html', {
                'error': 'Test name is required.'
            })

        question_count = 0
        while f'question_text_{question_count}' in request.POST:
            text = request.POST.get(f'question_text_{question_count}')
            answer_a = request.POST.get(f'answer_a_{question_count}')
            answer_b = request.POST.get(f'answer_b_{question_count}')
            answer_c = request.POST.get(f'answer_c_{question_count}')
            answer_d = request.POST.get(f'answer_d_{question_count}')
            correct_answer = request.POST.get(f'correct_answer_{question_count}')

            is_a_correct = (correct_answer == 'a')
            is_b_correct = (correct_answer == 'b')
            is_c_correct = (correct_answer == 'c')
            is_d_correct = (correct_answer == 'd')

            print(f'Question {question_count}: {text}, A: {answer_a}, B: {answer_b}, C: {answer_c}, D: {answer_d}, Correct: {correct_answer}')
            
            if text and answer_a and answer_b and answer_c and answer_d:
                Question.objects.create(
                    test=test,
                    text=text,
                    option_a=answer_a,
                    is_a_correct=is_a_correct,
                    option_b=answer_b,
                    is_b_correct=is_b_correct,
                    option_c=answer_c,
                    is_c_correct=is_c_correct,
                    option_d=answer_d,
                    is_d_correct=is_d_correct,
                )
                print(f'Question {question_count} created for Test ID: {test.id}')
            else:
                print(f'Missing data for Question {question_count}')
            question_count += 1

        return redirect('quizzes:home')
    
    return render(request, 'quiz/create_test.html')
