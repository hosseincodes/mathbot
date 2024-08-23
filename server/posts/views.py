from rest_framework import generics
from .models import Post
from .serializers import PostSerializer, PostCreateSerializer
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .permissions import IsOwnerOrAdmin
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status


class LargeResultsSetPagination(PageNumberPagination):
    page_size = 30
    page_size_query_param = 'page_size'
    max_page_size = 30

class PostsListAPIView(generics.ListAPIView):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer
    pagination_class = LargeResultsSetPagination

class PostsCreateAPIView(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostCreateSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

class PostsDetailAPIView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostsDeleteAPIView(generics.DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsOwnerOrAdmin]
    authentication_classes = [JWTAuthentication]


class LikePostAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self,request,post_id):
         # Fetch the post using get_object_or_404
        post = get_object_or_404(Post, id=post_id)
        
        if request.user in post.likes.all():
            post.likes.remove(request.uer)
            message= '.پست انلایک شد'
        else:
            post.likes.add(request.user)  # Like the post
            message = ".پست لایک شد"    

        return Response({'message':message,'likes_count':post.likes_count()},status=status.status.HTTP_200_OK)   
