from django.urls import path
from . import views

urlpatterns = [
    path('', views.appData),
    path('videos/', views.getVideos),
    path('home/', views.home),
    path('courses/', views.enrolledCourses),
    path('courses/python/', views.python),
    path('courses/java/', views.java),
    path('signup/', views.signup),
    path('login/', views.login)
]
