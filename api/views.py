from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Account, Course
import json

# Create your views here.

logged = False


@csrf_exempt
def appData(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        for key in data.keys():
            logged = data[key] if key == 'Logged' else logged
        return JsonResponse({"Status": 200}, safe=False)
    else:
        return JsonResponse({"Logged": logged}, safe=False)


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
        full_name = ""
        for account in Account.objects.all():
            if data["email"] == account.email and data["password"] == account.password:
                info = True
                full_name = account.firstname + " " + account.lastname
        if info:
            return JsonResponse(full_name, safe=False)
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
