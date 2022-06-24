from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Account, Course
import json

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


@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        info = False
        for account in Account.objects.all():
            if data["email"] == account.email and data["password"] == account.password:
                info = True
        if info:
            return JsonResponse("Logged in", safe=False)
        else:
            return JsonResponse("Either the email or password is incorrect", safe=False)
    else:
        return JsonResponse("login", safe=False)


@csrf_exempt
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        for account in Account.objects.all():
            if data["email"] == account.email:
                return HttpResponse("An account already exists with this email")
        acc = Account(type=False, password=data['password'],
                      firstname=data['firstName'], lastname=data['lastName'], email=data['email'])
        acc.save()
        return JsonResponse("New User Created", safe=False)
    else:
        #q = Account.objects.get(id=2)
        return JsonResponse('sign up', safe=False)
