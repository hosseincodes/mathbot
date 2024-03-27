from django.urls import path

from . import views

urlpatterns = [
    path('', views.CommentsListAPIView.as_view()),
    path('create/', views.CommentsCreateAPIView.as_view()),
    path('<int:pk>/', views.CommentsDetailAPIView.as_view()),
    path('<int:pk>/delete/', views.CommentsDeleteAPIView.as_view()),
]