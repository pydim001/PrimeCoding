from django.urls import path
from . import views

urlpatterns = [
    path('videos/', views.getVideos),
    path('', views.home),
    path('courses/', views.enrolledCourses)
]
