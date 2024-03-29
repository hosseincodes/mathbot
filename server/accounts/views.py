from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.permissions import (
    AllowAny,
)

User = get_user_model()

from .serializers import (
    UserCreateSerializer,
)
class UserCreateAPIView(generics.CreateAPIView):
    serializer_class = UserCreateSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]