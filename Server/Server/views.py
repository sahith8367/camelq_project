from django.http import HttpResponse
from django.http import JsonResponse

def homepage(request):
    return HttpResponse("this is a home page")

def shopping(request):
    return HttpResponse("this is shopping page")

