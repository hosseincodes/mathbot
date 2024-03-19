from django.urls import path

from . import views

urlpatterns = [
    path('posts/', views.PostsApiView.as_view()),
    path('posts/<pk>', views.PostsDetailView.as_view()),
]