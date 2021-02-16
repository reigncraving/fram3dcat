from rest_framework import serializers, fields
from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from GlobalModels.models import Skills

User = get_user_model()
# User Serializer
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password',  'first_name', 'last_name', 'avatar',
    'address_line','zip_code','state','country',
    'date_joined', 'last_logged_in', 'is_available', 'company_name', 'position',
    'website','tools', 'work_fields', 'skills', 'is_staff', 'is_designer', 'is_admin', 'is_active' )


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):

  class Meta:
    model = User
    fields = ('id', 'username', 'password', 'email', 'is_designer',
     'date_joined')
    #extra_kwargs = {'password': {'write_only': True}}
    extra_kwargs = dict(company_status=dict(required=True, allow_null=False))

  def create(self, validated_data):
   # user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'], validated_data['is_designer'])

    user = User.objects.create_user(
    self.validated_data['username'],
    email=validated_data['email'],
    password=validated_data['password'],
    is_designer = validated_data['is_designer']
)

    return user

#login
class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")


#change Password
class ChangePasswordSerializer(serializers.Serializer):
    model = User

    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


#list of all users
class AllPublicUsersSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id','username', 'email', 'first_name', 'last_name', 'avatar',
    'address_line','zip_code','state','country',
    'date_joined', 'last_logged_in', 'is_available', 'company_name', 'position',
    'website','tools', 'work_fields', 'skills', 'is_staff', 'is_designer', 'is_admin', 'is_active' )

#serializer for author detail
class AuthorSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'avatar',
    'is_available')

class PersonalInfoSerializer(serializers.ModelSerializer):
   class Meta:
        model = User
        fields = ('first_name', 'last_name', 'website')

class ProfessionalInfoSerializer(serializers.ModelSerializer):
   class Meta:
        model = User
        fields = ('work_fields', 'company_name', 'position', 'skills' )

class LocationInfoSerializer(serializers.ModelSerializer):
   class Meta:
        model = User
        fields = ('address_line','zip_code','state','country')

#list of all Designers:
class AllPublicDesignersSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'first_name', 'last_name', 'avatar',
    'address_line','zip_code','state','country',
    'date_joined', 'last_logged_in', 'is_available', 'company_name', 'position',
    'website','tools', 'work_fields', 'skills', 'is_staff', 'is_designer', 'is_admin', 'is_active' )


#CompanyInfoSerializer
class CompanyInfoSerializer(serializers.ModelSerializer):
   class Meta:
        model = User
        fields = ('company_name', 'website', 'website', 'work_fields', 'address_line','zip_code','state','country')


#Avatar
class UserAvatarSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["avatar"]

    def patch(self, *args, **kwargs):
        if self.instance.avatar:
            self.instance.avatar.delete()
        return super().save(*args, **kwargs)


#destroy user
class DestroyUserSerializer(serializers.Serializer):
    model = User

    username = serializers.CharField(required=True)
    email = serializers.CharField(required=True)
    password = serializers.CharField(required=True)
