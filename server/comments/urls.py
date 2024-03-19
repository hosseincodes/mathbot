from django.urls import path

from . import views

urlpatterns = [
    path('comments/', views.CommentsApiView.as_view()),
    path('comments/<pk>', views.CommentsApiView.as_view()),
]