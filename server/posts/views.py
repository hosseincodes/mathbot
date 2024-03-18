from django.shortcuts import render
from rest_framework import generics
from .models import Post
from django.contrib.auth import get_user_model
from .serializers import PostSerializer, UserSerialzier

User = get_user_model()

class PostsApiView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    # authentication_classes = [BasicAuthentication]
    # permission_classes = [IsAuthenticated]


class PostsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class UsersApiView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerialzier