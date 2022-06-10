from django.db import models

# Create your models here.


class Account(models.Model):
    type = models.BooleanField()
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    firstname = models.CharField(max_length=50)
    courses = models.JSONField()

    def __str__(self):
        return self.email

    def merge(self, other):
        pass

    def register(self, course):
        self.videos.append(course)


class Course(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    videos = models.JSONField()

    def __str__(self):
        return self.title
