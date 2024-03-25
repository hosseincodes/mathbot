from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Post(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    title = models.TextField()
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    # tags = models.TextChoices()
    creator = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    class Meta:
        ordering = ['created_at']