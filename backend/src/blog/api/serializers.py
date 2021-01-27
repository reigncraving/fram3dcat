from rest_framework import serializers
from accounts.api.serializers import AuthorSerializer
from blog.models import Story, Comment

class StorySerializer(serializers.ModelSerializer):
        author = AuthorSerializer(read_only=True)
        class Meta:
            model = Story
            fields = (
            'id',
            'headline',
            'body_text',
            'pub_date',
            'mod_date',
            'description',
            'author'
            )

class CommentSerializer(serializers.ModelSerializer):
        author = AuthorSerializer(read_only=True)
        class Meta:
            model = Comment
            fields = (
            'id',
            'post',
            'author',
            'content',
            'likes',
            'pub_date'
            )
