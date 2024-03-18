from django.db import models
from django.contrib.auth import get_user_model
from posts.models import Post

User = get_user_model()

class Comment(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    creator = models.ForeignKey(
        User,
        on_delete = models.CASCADE
    )
    post = models.ForeignKey(
        Post,
        on_delete = models.CASCADE
    )

    class Meta:
        ordering = ['created_at']