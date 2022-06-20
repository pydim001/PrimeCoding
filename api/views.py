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


def login(request):
    pass


@csrf_exempt
def signup(request):
    #name = request.POST.get("email")
    if request.method == 'POST':
        data = json.loads(request.body)
        for account in Account.objects.all():
            if data["email"] == account.email:
                return HttpResponse("An account already exists with this email")
        acc = Account(type=False, password=data['password'],
                      firstname=data['firstName'], lastname=data['lastName'], email=data['email'])
        acc.save()
        return HttpResponse("New User Created")
    else:
        q = Account.objects.get(id=2)
        return JsonResponse(str(q), safe=False)
