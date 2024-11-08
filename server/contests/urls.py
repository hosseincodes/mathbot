from django.urls import path

from . import views

urlpatterns = [
    path('create/', views.ContestsCreateAPIView.as_view(), name='contest-create'),
    path('<int:pk>/', views.ContestsDetailAPIView.as_view(), name='contest-detail'),
    path('<int:pk>/delete/', views.ContestsDeleteAPIView.as_view(), name='contest-delete'),
    path('list/',views.ContestsListAPIVIEW.as_view(),name='contest-list'),
    path('team/add-member/',views.AddUserToTeamView.as_view(),name='add_user_to_team'),
    path('team/create',views.CreateTeamView.as_view(),name='create_team'),
    path('team/leave/',views.LeaveTeamView,name='leave-team')

]