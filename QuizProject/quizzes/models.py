from django.db import models

class Test(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Question(models.Model):
    test = models.ForeignKey(Test, related_name='questions', on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
    option_a = models.CharField(max_length=100)
    is_a_correct = models.BooleanField(default=False)
    option_b = models.CharField(max_length=100)
    is_b_correct = models.BooleanField(default=False)
    option_c = models.CharField(max_length=100)
    is_c_correct = models.BooleanField(default=False)
    option_d = models.CharField(max_length=100)
    is_d_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.text
