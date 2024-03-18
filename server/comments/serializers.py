from rest_framework import serializers
from .models import Comment
from django.contrib.auth import get_user_model


User = get_user_model()


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'



class UserSerialzier(serializers.ModelSerializer):
    
    todos = CommentSerializer(read_only=True, many=True)

    class Meta:
        model = User
        fields = '__all__'