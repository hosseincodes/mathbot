from rest_framework import serializers
from .models import Post
from django.contrib.auth import get_user_model


User = get_user_model()


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = '__all__'



class UserSerialzier(serializers.ModelSerializer):
    
    todos = PostSerializer(read_only=True, many=True)

    class Meta:
        model = User
        fields = '__all__'