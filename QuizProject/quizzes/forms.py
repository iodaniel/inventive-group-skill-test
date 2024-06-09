# quizzes/forms.py
from django import forms
from .models import Test, Question
from django.forms import modelformset_factory

class TestForm(forms.ModelForm):
    class Meta:
        model = Test
        fields = ['name']

class QuestionForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = [
            'text', 
            'option_a', 'is_a_correct', 
            'option_b', 'is_b_correct', 
            'option_c', 'is_c_correct', 
            'option_d', 'is_d_correct'
        ]

QuestionFormSet = modelformset_factory(Question, form=QuestionForm, extra=1, can_delete=True)
