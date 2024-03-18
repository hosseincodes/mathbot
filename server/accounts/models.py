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
    username = models.TextField()
    email = models.EmailField()
    description = models.TextField(blank=True, default='')
    # we use URL instead of imagefield because we'll use 3rd party img hosting later on
    avatar = models.URLField(default='', blank=True)
    name = models.CharField(max_length=32, default='')

    def __str__(self):
        return self.user.username