from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):

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
        fields = '__all__'

class PostCreateSerializer(serializers.ModelSerializer):
    title = serializers.CharField(allow_blank=False)
    content = serializers.CharField(allow_blank=False)
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
            'creator'
        )
        read_only_fields=('id', 'created_at', 'creator')

    def create(self, validated_data):
        title = validated_data['title']
        content = validated_data['content']

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
            creator=user
        )
        post.save()
        return post