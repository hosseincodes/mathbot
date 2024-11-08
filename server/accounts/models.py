from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='profile'
    )
    bio = models.TextField(
        max_length=2000,
        blank=True,
        default=''
    )
    name = models.CharField(max_length=32, default='')
    avatar = models.ImageField(upload_to='userprofiles')

    skills = models.CharField(max_length=512)
    links = models.CharField(max_length=512)
    work_experience = models.TextField()
    personal_info = models.TextField()
    team = models.ForeignKey(null=True,blank=True,on_delete=models.SET_NULL)
    is_admin = models.BooleanField(default=False,blank=True)
    



    def __str__(self):
        return self.user.username