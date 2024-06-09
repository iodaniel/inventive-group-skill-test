
from django.urls import path
from . import views

app_name = 'quizzes'

urlpatterns = [
    path('', views.home, name='home'),
    path('8wastes', views.waste, name="waste"),
    path('leanTerminology', views.lean, name="lean"),
    path('create_test', views.create_test, name="create_test"),
    path('custom/<int:test_id>/', views.custom, name="custom"),
    path('quiz/<str:test_id>/', views.quiz, name='quiz'),
  
]
