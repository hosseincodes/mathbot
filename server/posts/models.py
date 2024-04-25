from django.db import models
from django.contrib.auth import get_user_model
from django.utils.timezone import now

User = get_user_model()

class Post(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    title = models.TextField()
    content = models.TextField()
    created_at = models.DateTimeField(default=now, editable=False)
    tags = models.TextField()
    image = models.ImageField(upload_to='postimages')
    creator = models.ForeignKey(
        User,
        on_delete = models.CASCADE,
        related_name='posts'
    )