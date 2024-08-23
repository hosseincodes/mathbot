from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    likes_count = serializers.SerializerMethodField()
    def get_likes_count(self, obj):
        return obj.likes.count()  # Count of likes for the post

    creator = serializers.HyperlinkedRelatedField(
        read_only=True,
        view_name='user-detail',
        lookup_field='username'
    )

    comments = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='comment-detail',
        lookup_field='pk'
    )

    class Meta:
        model = Post
        fields = ['id','title','content','created_at','tags','image','creator','likes_count']

class PostCreateSerializer(serializers.ModelSerializer):
    title = serializers.CharField(allow_blank=False)
    content = serializers.CharField(allow_blank=False)
    tags = serializers.CharField(allow_blank=True)
    image = serializers.ImageField(allow_empty_file=True, default='')
    creator = serializers.HyperlinkedRelatedField(
        read_only=True,
        view_name='user-detail',
        lookup_field='username'
    )
    class Meta:
        model = Post
        fields = (
            'id',
            'title',
            'content',
            'created_at',
            'tags',
            'image',
            'creator'
        )
        read_only_fields=('id', 'created_at', 'creator')

    def create(self, validated_data):
        title = validated_data['title']
        content = validated_data['content']
        tags = validated_data['tags']
        image = validated_data['image']

        # Get the requesting user
        user = None
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
        else:
            raise serializers.ValidationError('برای ثبت سوال ابتدا باید وارد اکانت خود شوید.')

        # Create the post
        post = Post(
            title=title,
            content=content,
            tags=tags,
            image=image,
            creator=user
        )
        post.save()
        return post