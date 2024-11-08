from rest_framework import generics
from .models import Contest,Team
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from permissions import IsOwnerOrAdmin
from .serializers import ContestListSerializer,TeamListSerializer

# class ContestsCreateAPIView(generics.CreateAPIView):
#     queryset = Contest.objects.all()
#     # serializer_class = ContestCreateSerializer
#     permission_classes = [IsAuthenticated]
#     authentication_classes = [JWTAuthentication]


class TeamListAPIVIEW(generics.ListAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamListSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get_serializer_context(self,request):
        


class ContestsListAPIVIEW(generics.ListAPIView):
    queryset = Contest.objects.all()
    serializer_class = ContestListSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]



class ContestsDetailAPIView(generics.RetrieveAPIView):
    queryset = Contest.objects.all()
    serializer_class = ContestListSerializer


# class ContestsDeleteAPIView(generics.DestroyAPIView):
#     queryset = Contest.objects.all()
#     # serializer_class = PostSerializer
#     permission_classes = [IsOwnerOrAdmin]
#     authentication_classes = [JWTAuthentication]