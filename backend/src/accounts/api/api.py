from rest_framework import (
    generics, mixins, permissions, status,
)
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from django.contrib.auth import get_user_model
from knox.models import AuthToken
from .serializers import (
UserSerializer,
RegisterSerializer,
LoginSerializer,
ChangePasswordSerializer,
PersonalInfoSerializer,
ProfessionalInfoSerializer,
LocationInfoSerializer,
AllPublicDesignersSerializer,
UserAvatarSerializer,
CompanyInfoSerializer,
DestroyUserSerializer,
AuthorSerializer,
)

from rest_framework.permissions import IsAuthenticated
import django_filters

User = get_user_model()

#reg API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

#log API
class LoginAPI(generics.GenericAPIView):
      serializer_class = LoginSerializer

      def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        return Response({
          "user": UserSerializer(user, context=self.get_serializer_context()).data,
          "token": token
        })
#Get user API
class UserAPI(generics.RetrieveAPIView):
      permission_classes = [
        permissions.IsAuthenticated,
      ]
      serializer_class = UserSerializer

      def get_object(self):
        return self.request.user




#update personal info
class PersonalInfoUpdateAPI(generics.RetrieveUpdateAPIView):
      # permission_classes = [
    #   permissions.IsAuthenticated,
    # ]
      queryset = User.objects.all()
      serializer_class = PersonalInfoSerializer

#update professional info
class ProfessionalInfoUpdateAPI(generics.RetrieveUpdateAPIView):
    # permission_classes = [
    #   permissions.IsAuthenticated,
    # ]
      queryset = User.objects.all()
      serializer_class = ProfessionalInfoSerializer

#update Company info
class CompanyInfoUpdateAPI(generics.RetrieveUpdateAPIView):
    # permission_classes = [
    #   permissions.IsAuthenticated,
    # ]
      queryset = User.objects.all()
      serializer_class = CompanyInfoSerializer


class LocationInfoUpdateAPI(generics.RetrieveUpdateAPIView):
    # permission_classes = [
    #   permissions.IsAuthenticated,
    # ]
      queryset = User.objects.all()
      serializer_class = LocationInfoSerializer

#all Designers:
class AllDesignersAPIView(generics.ListAPIView):

    serializer_class = AllPublicDesignersSerializer
    queryset = User.objects.filter(is_designer=True)
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['username']
    #filter_backends = [filters.SearchFilter]
    #search_fields = ['username', 'skills']
    
#all Designers:
#seach designers by Skills
#http://127.0.0.1:8000/accounts/auth/alldesigners/skills/User/?skills=TIME_MANAGEMENT
class SearchDesignersBySkills(generics.ListAPIView):

    serializer_class = AllPublicDesignersSerializer
    def get_queryset(self):
       
        queryset = User.objects.filter(is_designer=True)
        skills = self.request.query_params.get('skills', None)
        if skills is not None:
            queryset = queryset.filter(skills__contains=skills, is_designer=True)
        return queryset

#all Designers:
#seach designers by Work_Fields
#http://127.0.0.1:8000/accounts/auth/alldesigners/work/user/?work_fields=MODELLING
class SearchDesignersByWork(generics.ListAPIView):

    serializer_class = AllPublicDesignersSerializer
    def get_queryset(self):
       
        queryset = User.objects.all()
        work_fields = self.request.query_params.get('work_fields', None)
        if work_fields is not None:
            queryset = queryset.filter(work_fields__contains=work_fields, is_designer=True)
        return queryset

#changePassword api
# class PasswordChangeAPI(generics.RetrieveUpdateAPIView):
#     serializer_class = ChangePasswordSerializer
#     model = User
#     permission_classes = [
#       permissions.IsAuthenticated,
#     ]

#     def Post(self, request):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         request.user.set_password(serializer.validated_data['new_password'])
#         request.user.save()
#         return Response(status=status.HTTP_204_NO_CONTENT)

class ChangePasswordAPIView(generics.UpdateAPIView):
    """
    An endpoint for changing password.
    """
    serializer_class = ChangePasswordSerializer
    model = User
    permission_classes = (IsAuthenticated,)

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Password updated successfully',
                'data': []
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



#avatar
class UserAvatarUploadAPIview(generics.UpdateAPIView):
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [IsAuthenticated]
    serializer_class = UserAvatarSerializer
    queryset = User.objects.all()
    def patch(self, request, pk, format=None,):
        serializer = UserAvatarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DestroyUserAPIview(generics.DestroyAPIView):
    serializer_class = DestroyUserSerializer
    #permission_classes = [IsAuthenticated]
    queryset = User.objects.all()

    def delete(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.object.delete()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Account deleted',
                'data': []
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetAuthorAPIiew(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = AuthorSerializer
