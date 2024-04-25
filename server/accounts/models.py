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

    def __str__(self):
        return self.user.username