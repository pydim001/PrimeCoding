from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


def getVideos(request):
    return JsonResponse('You have no videos', safe=False)


def home(request):
    return JsonResponse('Home', safe=False)
