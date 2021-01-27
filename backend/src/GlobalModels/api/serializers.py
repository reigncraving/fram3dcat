from rest_framework import serializers, fields
from accounts.api.serializers import AuthorSerializer
from GlobalModels.models import (
Location,
Skills,
Field_of_work,
Tools,
Frame,
Frame_comment
)



class LocationSerializer(serializers.ModelSerializer):
        class Meta:
            model = Location
            fields = (
            'id',
            'address_line1',
            'address_line2',
            'zip_code',
            'state',
            'country',
            'long',
            'lat'
            )

class SkillsSerializer(serializers.ModelSerializer):
    skills = fields.MultipleChoiceField(choices=Skills.SKILL_CHOICES)

    class Meta:
        model = Skills
        fields = (
        'skills',
        )

class CustomMultipleChoiceField(fields.MultipleChoiceField):
    def to_representation(self, value):
        return list(super().to_representation(value))

class FieldOfWorkSerializer(serializers.ModelSerializer):
    #FIELD_CHOICES = fields.MultipleChoiceField(choices=Field_of_work.FIELD_CHOICES)

    class Meta:
        model = Field_of_work
        fields = (
        'FIELD_CHOICES',
        )

        FIELD_CHOICES = CustomMultipleChoiceField(choices = Field_of_work.FIELD_CHOICES)

class ToolsSerializer(serializers.ModelSerializer):
        tools = fields.MultipleChoiceField(choices=Tools.TOOL_CHOICES)

        class Meta:
            model = Field_of_work
            fields = (
            'tools',
            )

class FrameSerializer(serializers.ModelSerializer):
        #user = serializers.RelatedField(source=get_user_model(), read_only=True)
        author = AuthorSerializer(read_only=True)
        class Meta:
            model = Frame
            fields = (
            'id',
            'title',
            'description',
            'author',
            'frameFile',
            'frame_picture',
            'rating',
            'number_of_comments',
            'likes',
            'views',
            'date_uploaded',
            'last_moddified',
            )
    

class FrameCommentSerializer(serializers.ModelSerializer):
        author = AuthorSerializer(read_only=True)
        class Meta:
            model = Frame_comment
            fields = (
            'post',
            'author',
            'content',
            'likes',
            'pub_date'
            )
