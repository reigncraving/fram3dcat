from rest_framework import serializers
from accounts.api.serializers import AuthorSerializer
from blog.models import Story, Comment

class StorySerializer(serializers.ModelSerializer):

        class Meta:
            model = Story
            fields = (
            'id',
            'author',
            'headline',
            'headline_photo',
            'body_text',
            'pub_date',
            'mod_date',
            'description',
            )


class StoryAuthorInfoSerializer(serializers.ModelSerializer):
        author = AuthorSerializer(read_only=True)
        class Meta:
            model = Story
            fields = (
            'id',
            'author',
            'headline',
            'headline_photo',
            'body_text',
            'pub_date',
            'mod_date',
            'description',
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
