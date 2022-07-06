from django.db import models

# Create your models here.


class Account(models.Model):
    type = models.BooleanField()
    password = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    firstname = models.CharField(max_length=50)

    def __str__(self):
        return self.email

    def merge(self, other):
        pass


class Course(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    courseId = models.CharField(max_length=4)
    about = models.CharField(max_length=10000)

    def __str__(self):
        return self.title


class Video(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title
