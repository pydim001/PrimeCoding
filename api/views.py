from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


def appData(request):
    return JsonResponse({"Logged": False}, safe=False)


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


def login(request):
    pass


@csrf_exempt
def signup(request):
    #name = request.POST.get("email")
    return JsonResponse(request.POST, safe=False)
