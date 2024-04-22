from rest_framework import serializers
from .models import UserProfile
from rest_framework.validators import UniqueValidator
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate

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
    avatar = serializers.ImageField(source='profile.avatar', allow_empty_file=True, default='')
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
            'avatar',
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

        avatar = profile_data.get('avatar') or None
        if not avatar:
            avatar = 'profile.png'
        profile = UserProfile(
            user = user,
            avatar = avatar,
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

    comments = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='comment-detail',
        lookup_field='pk'
    )
    
    bio = serializers.CharField(source='profile.bio')
    name = serializers.CharField(source='profile.name')
    avatar = serializers.ImageField(source='profile.avatar')
    class Meta:
        model = User
        fields = [
            'username',
            'name',
            'bio',
            'is_staff',
            'date_joined',
            'email',
            'comments',
            'avatar',
            'posts'
        ]
        lookup_field = 'username'

class UserUpdateSerializer(serializers.ModelSerializer):
    # A field from the user's profile:
    bio = serializers.CharField(source='profile.bio', allow_blank=True)
    avatar = serializers.ImageField(source='profile.avatar', allow_empty_file=True)
    name = serializers.CharField(
    	source='profile.name',
    	max_length=32,
    	allow_blank=True
    )
    current_password = serializers.CharField(
        write_only=True,
        allow_blank=True,
        label=("پسورد فعلی"),
        help_text=('الزامی'),
    )
    new_password = serializers.CharField(
        allow_blank=True,
        default='',
        write_only=True,
        min_length=4,
        max_length=32,
        label=("پسورد جدید"),
    )
    email = serializers.EmailField(
        allow_blank=True,
        default='',
        validators=[UniqueValidator(
            queryset=User.objects.all(),
            message='این ایمیل قبلا ثبت شده است'
        )]
    )

    class Meta:
        model = User
        fields = (
            'username',
            'name',
            'email',
            'current_password',
            'new_password',
            'avatar',
            'bio',
        )
        read_only_fields = ('username',)
        lookup_field = 'username'

    def update(self, instance, validated_data):

        try:
            username = self.context.get('request').user.username
        except:
            msg = ('احراز هویت الزامی است')
            raise serializers.ValidationError(msg, code='authorization')

        password = validated_data.get('current_password')
        validated_data.pop('current_password', None)

        if not password:
            msg = ('باید پسورد فعلی را وارد کنید')
            raise serializers.ValidationError(msg, code='authorization')

        user = authenticate(request=self.context.get('request'),
                            username=username, password=password)
        if not user:
            msg = ('پسوردی که وارد کردید اشتباه است')
            raise serializers.ValidationError(msg, code='authorization')

        # change password to a new one if it exists
        new_password = validated_data.get('new_password') or None
        if new_password:
            instance.set_password(new_password)
        validated_data.pop('new_password', None)

        # Update user profile fields
        profile_data = validated_data.pop('profile', None)
        profile = instance.profile
        for field, value in profile_data.items():
            if value:
                setattr(profile, field, value)
        # Update user fields
        for field, value in validated_data.items():
            if value:
                setattr(instance, field, value)

        profile.save()
        instance.save()
        return instance

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    def get_token(self, user):

        token = super().get_token(user)
        token['username'] = user.username

        return token