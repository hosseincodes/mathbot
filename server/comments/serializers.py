from rest_framework import serializers
from .models import Comment
from posts.models import Post

class CommentSerializer(serializers.ModelSerializer):

    creator = serializers.HyperlinkedRelatedField(
        read_only=True,
        view_name='user-detail',
        lookup_field='username'
    )

    class Meta:
        model = Comment
        fields = '__all__'

class CommentCreateSerializer(serializers.ModelSerializer):
    content = serializers.CharField(allow_blank=False)
    post = serializers.HyperlinkedRelatedField(
        read_only=True,
        view_name='post-detail'
    )
    post_id = serializers.IntegerField(
        required=True,
        help_text=('Required. Id of the thread this post is created in')
    )
    creator = serializers.HyperlinkedRelatedField(
        read_only=True,
        view_name='user-detail',
        lookup_field='username'
    )
    class Meta:
        model = Comment
        fields = (
            'id',
            'content',
            'created_at',
            'creator',
            'post',
            'post_id'
        )
        read_only_fields=('id', 'created_at', 'post', 'creator')

    def create(self, validated_data):
        content = validated_data['content']
        post_id = validated_data['post_id']

        # Get thread object
        try:
            post = Post.objects.get(id=post_id)
        except Post.DoesNotExist:
            raise serializers.ValidationError('Thread does not exist, please enter correct thread id')

        # Get the requesting user
        user = None
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
        else:
            raise serializers.ValidationError('برای ثبت سوال ابتدا باید وارد اکانت خود شوید.')

        # Create the comment
        comment = Comment(
            content=content,
            post= post,
            creator=user
        )
        comment.save()
        return comment