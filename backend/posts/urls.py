from django.urls import path

from . import views

urlpatterns = [
    path('', views.PostsListAPIView.as_view(), name='post-list'),
    path('create/', views.PostsCreateAPIView.as_view(), name='post-create'),
    path('<int:pk>/', views.PostsDetailAPIView.as_view(), name='post-detail'),
    path('<int:pk>/delete/', views.PostsDeleteAPIView.as_view(), name='post-delete'),
]