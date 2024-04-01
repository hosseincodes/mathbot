from django.db import models
from django.contrib.auth import get_user_model
from posts.models import Post
from django_jalali.db import models as jmodel

User = get_user_model()

class Comment(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    content = models.TextField()
    created_at = jmodel.jDateTimeField(auto_now_add=True)
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