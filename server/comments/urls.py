from django.urls import path

from . import views

urlpatterns = [
    path('', views.CommentsListAPIView.as_view(), name='comment-list'),
    path('create/', views.CommentsCreateAPIView.as_view(), name='comment-create'),
    path('<int:pk>/', views.CommentsDetailAPIView.as_view(), name='comment-detail'),
    path('<int:pk>/delete/', views.CommentsDeleteAPIView.as_view(), name='comment-delete'),
]