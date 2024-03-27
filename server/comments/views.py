from rest_framework import generics
from .models import Comment
from django.contrib.auth import get_user_model
from .serializers import CommentSerializer, UserSerialzier

User = get_user_model()

class CommentsListAPIView(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentsCreateAPIView(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentsDetailAPIView(generics.RetrieveAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentsDeleteAPIView(generics.DestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class UsersApiView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerialzier