from rest_framework import serializers
from jobBoard.models import Job, Job_comment
from accounts.api.serializers import AuthorSerializer
from GlobalModels.api.serializers import LocationSerializer

class JobSerializer(serializers.ModelSerializer):

        class Meta:
            model = Job
            fields = (
                '__all__'
            )

class JobCommentSerializer(serializers.ModelSerializer):
        class Meta:
            model = Job_comment
            fields = (
            'post',
            'author',
            'content',
            'likes',
            'pub_date'
            )

class JobSerializerAuthorDetail(serializers.ModelSerializer):
        author = AuthorSerializer(read_only=True)
        class Meta:
            model = Job
            fields = (
            'headline',
            'description',
            'body_text',
            'salary',
            'pub_date',
            'mod_date',
            'due_date',
            'author',
            'number_of_comments',
            'rating',
            'is_remote',
            'is_active',
            'submition_url',
            )
