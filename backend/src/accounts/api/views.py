from rest_framework import generics, permissions
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from rest_framework import status
from knox.models import AuthToken
from .serializers import (
    UserSerializer, 
    RegisterSerializer, 
    LoginSerializer, 
    ChangePasswordSerializer, 
    AllPublicUsersSerializer,
    AllPublicDesignersSerializer,
)
from rest_framework.permissions import IsAuthenticated

User = get_user_model()

class AllUsersAPIView(generics.ListAPIView):

    serializer_class = AllPublicUsersSerializer
    queryset = User.objects.all()

#all Designers:
class AllDesignersAPIView(generics.ListAPIView):

    serializer_class = AllPublicDesignersSerializer
    queryset = User.objects.filter(is_designer=True)
    

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = AllPublicUsersSerializer


class UserAPIView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class RegisterAPIView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

class ChangePasswordView(generics.GenericAPIView):

        serializer_class = ChangePasswordSerializer
        model = User
        

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
