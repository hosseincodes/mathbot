from rest_framework import serializers
from .models import UserProfile
from rest_framework.validators import UniqueValidator
from django.contrib.auth import get_user_model

User = get_user_model()

class UserCreateSerializer(serializers.ModelSerializer):
    username = serializers.SlugField(
        min_length=4,
        max_length=32,
        validators=[UniqueValidator(
            queryset=User.objects.all(),
            message='این نام کاربری قبلا ثبت شده است.'
        )],
        required=True
    )
    password = serializers.CharField(
        min_length=4,
        max_length=32,
        write_only=True,
        required=True
    )
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(
            queryset=User.objects.all(),
            message='این ایمیل قبلا ثبت شده است.'
        )]
    )
    bio = serializers.CharField(source='profile.bio', allow_blank=True, default='')
    name = serializers.CharField(
        source='profile.name',
        allow_blank=True,
        default='',
        max_length=32
    )

    class Meta:
        model = User
        fields = (
            'username',
            'name',
            'email',
            'password',
            'bio'
        )

    def create(self, validated_data):
        profile_data = validated_data.pop('profile', None)
        username = validated_data['username']
        email = validated_data['email']
        password = validated_data['password']
        user = User(
                username = username,
                email = email
        )
        user.set_password(password)
        user.save()

        profile = UserProfile(
            user = user,
            bio = profile_data.get('bio', ''),
            name = profile_data.get('name', ''),
        )
        profile.save()
        return user
    
class UserDetailSerializer(serializers.ModelSerializer):

    posts = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='post-detail',
        lookup_field='pk'
    )
    
    bio = serializers.CharField(source='profile.bio')
    name = serializers.CharField(source='profile.name')
    class Meta:
        model = User
        fields = '__all__'
        lookup_field = 'username'