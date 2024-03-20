from rest_framework import generics
from .models import Post
from django.contrib.auth import get_user_model
from .serializers import PostSerializer, UserSerialzier

User = get_user_model()

class PostsListAPIView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostsCreateAPIView(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostsDetailAPIView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostsDeleteAPIView(generics.DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class UsersApiView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerialzier