from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


def getVideos(request):
    return JsonResponse('You have no videos', safe=False)


def home(request):
    return JsonResponse('Home', safe=False)


def enrolledCourses(request):
    return JsonResponse('You are not enrolled in any courses', safe=False)

def python(request):
    return JsonResponse('Python', safe=False)

def java(request):
    return JsonResponse('Java', safe=False)
