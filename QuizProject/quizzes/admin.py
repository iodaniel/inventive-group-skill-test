from django.contrib import admin
from .models import Test, Question

class QuestionInline(admin.TabularInline):
    model = Question
    extra = 1

class TestAdmin(admin.ModelAdmin):
    inlines = [QuestionInline]
    list_display = ('name',)
    search_fields = ('name',)

admin.site.register(Test, TestAdmin)
admin.site.register(Question)
