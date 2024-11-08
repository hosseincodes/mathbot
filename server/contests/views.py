from rest_framework import generics
from .models import Contest
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from ..permissions import IsOwnerOrAdmin


# class ContestsCreateAPIView(generics.CreateAPIView):
#     queryset = Contest.objects.all()
#     # serializer_class = ContestCreateSerializer
#     permission_classes = [IsAuthenticated]
#     authentication_classes = [JWTAuthentication]



class ContestsDetailAPIView(generics.RetrieveAPIView):
    queryset = Contest.objects.all()
    # serializer_class = PostSerializer

# class ContestsDeleteAPIView(generics.DestroyAPIView):
#     queryset = Contest.objects.all()
#     # serializer_class = PostSerializer
#     permission_classes = [IsOwnerOrAdmin]
#     authentication_classes = [JWTAuthentication]