from rest_framework import serializers
from jobBoard.models import Job, Job_comment

class JobSerializer(serializers.ModelSerializer):
        class Meta:
            model = Job
            fields = (
            'headline',
            'description',
            'location',
            'field_of_work',
            'skills',
            'body_text',
            'salary',
            'pub_date',
            'mod_date',
            'due_date',
            'author',
            'job_'
            'description',
            'author',
            'number_of_comments',
            'rating',
            'is_remote',
            'is_active',
            'submition_url',
            'experience_choices',
            'experience'
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
