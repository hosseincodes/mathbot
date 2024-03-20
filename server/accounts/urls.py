from django.urls import path
from . import views

urlpatterns = [
    path('', views.UserListAPIView.as_view(), name='user-list'),
    path('register/', views.UserCreateAPIView.as_view(), name='user-register'),
    path('login/', views.UserLoginAPIView.as_view(), name='user-login'),
    path('logout/', views.UserLogoutAPIView.as_view(), name='user-logout'),
    path('<slug:username>/', views.UserDetailAPIView.as_view(), name='user-detail'),
    path('<slug:username>/edit/', views.UserUpdateAPIView.as_view(), name='user-update'),
    path('<slug:username>/delete/', views.UserDeleteAPIView.as_view(), name='user-delete'),
]