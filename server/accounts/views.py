from rest_framework import generics
from rest_framework.permissions import (
    AllowAny,
)

from django.contrib.auth import get_user_model
User = get_user_model()

from .serializers import UserCreateSerializer, UserDetailSerializer

class UserCreateAPIView(generics.CreateAPIView):
    serializer_class = UserCreateSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]

class UserDetailAPIView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer
    permission_classes = [AllowAny]
    lookup_field = 'username'