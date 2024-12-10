from django.db import models
from django.contrib.auth.models import User
class Team(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=255)
    admin = models.ForeignKey(User, on_delete=models.CASCADE, related_name="teams")
    avatar = models.ImageField(upload_to='teamsAvatar')
    members = models.ForeignKey(
        User,
            on_delete = models.CASCADE,
            related_name='teams'
        )