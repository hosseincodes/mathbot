from django.db import models
from django.contrib.auth import get_user_model
from django_jalali.db import models as jmodel

User = get_user_model()

class Post(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    title = models.TextField()
    content = models.TextField()
    created_at = jmodel.jDateTimeField(auto_now_add=True)
    # tags = models.TextChoices()
    creator = models.ForeignKey(
        User,
        on_delete = models.CASCADE,
        related_name='posts'
    )