from rest_framework import generics
from .models import Contest,Team
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from permissions import IsOwnerOrAdmin
from .serializers import ContestListSerializer,TeamListSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from .models import UserProfile

class ContestsCreateAPIView(generics.CreateAPIView):
    queryset = Contest.objects.all()
    # serializer_class = ContestCreateSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]


class TeamListAPIVIEW(generics.ListAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamListSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

        


class ContestsListAPIVIEW(generics.ListAPIView):
    queryset = Contest.objects.all()
    serializer_class = ContestListSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]



class ContestsDetailAPIView(generics.RetrieveAPIView):
    queryset = Contest.objects.all()
    serializer_class = ContestListSerializer


class ContestsDeleteAPIView(generics.DestroyAPIView):
    queryset = Contest.objects.all()
    # serializer_class = PostSerializer
    permission_classes = [IsOwnerOrAdmin]
    authentication_classes = [JWTAuthentication]





class AddUserToTeamView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        
        admin_profile = request.user.profile  
        
        if not admin_profile.is_admin or not admin_profile.team:
            return Response({"error": "برای اضافه کردن عضو، ابتدا باید ادمین یک تیم باشید"}, status=status.HTTP_403_FORBIDDEN)
        
        current_team_members = UserProfile.objects.filter(team=admin_profile.team).count()
        if current_team_members >= 3:
            return Response({"error": "این تیم دارای حداکثر تعداد اعضا می باشد"}, status=status.HTTP_400_BAD_REQUEST)

        user_to_add = get_object_or_404(User, username=username)
        user_profile_to_add = user_to_add.profile  

        user_profile_to_add.team = admin_profile.team
        user_profile_to_add.save()
        
        return Response({"success": f"{username} به تیم اضافه شد"}, status=status.HTTP_200_OK)

class CreateTeamView(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    def post(self,request,*args,**kwargs):
        team_name = request.data.get("team_name")
        team_admin = request.user.profile
        if team_admin.team:
            return Response({"error":"شما عضو تیم دیگری هستید "},status=status.HTTP_400_BAD_REQUEST)
        new_team = Team(name=team_name)
        new_team.save()
        team_admin.is_admin = True
        team_admin.team = new_team
        team_admin.save()
        return Response({'message':'تیم {team_name} با موفقیت ساخته شد و آماده عضوگیری است.'},status=status.HTTP_200_OK)