from rest_framework import serializers
from .models import Contest,Team


class ContestListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contest
        fields = ['title','description','start_time','price','image']


class TeamListSerializer(serializers.ModelSerializer):
    participants = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Team
        fields = ['name','participants']

    def get_participants(self,obj):
        return obj.participants.values_list('user__username',flat=True)
            