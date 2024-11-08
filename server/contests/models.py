from django.db import models
from django.contrib.auth.models import User
class Contest(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_time = models.DateTimeField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="contests")
    image = models.ImageField(upload_to='contestimages')
    price = models.TextField()
   

class Team(models.Model):
    name = models.CharField(max_length=100)
