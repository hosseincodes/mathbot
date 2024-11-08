from django.urls import path

from . import views

urlpatterns = [
    # path('create/', views.ContestsCreateAPIView.as_view(), name='contest-create'),
    path('<int:pk>/', views.ContestsDetailAPIView.as_view(), name='contest-detail'),
    # path('<int:pk>/delete/', views.ContestsDeleteAPIView.as_view(), name='contest-delete'),
]