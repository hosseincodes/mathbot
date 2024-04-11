from django.db import models
from django.contrib.auth import get_user_model
from posts.models import Post
from django.utils.timezone import now

User = get_user_model()

class Comment(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    content = models.TextField()
    created_at = models.DateTimeField(default=now, editable=False)
    creator = models.ForeignKey(
        User,
        on_delete = models.CASCADE,
        related_name='comments'
    )
    post = models.ForeignKey(
        Post,
        on_delete = models.CASCADE,
        related_name='comments'
    )