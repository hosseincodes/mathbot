from rest_framework import generics
from .models import Comment
from django.contrib.auth import get_user_model
from .serializers import CommentSerializer, UserSerialzier

User = get_user_model()

class CommentsApiView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    # authentication_classes = [BasicAuthentication]
    # permission_classes = [IsAuthenticated]


class CommentsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class UsersApiView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerialzier