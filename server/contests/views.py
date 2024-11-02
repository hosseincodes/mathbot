from rest_framework import generics
from .models import Contest
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class ContestsCreateAPIView(generics.CreateAPIView):
    queryset = Contest.objects.all()
    # serializer_class = ContestCreateSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]