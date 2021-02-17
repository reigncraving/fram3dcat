from rest_framework import viewsets
from rest_framework import generics, permissions
import django_filters
from django.contrib.auth import get_user_model
from .serializers import (
LocationSerializer,
SkillsSerializer,
FieldOfWorkSerializer,
ToolsSerializer,
FrameSerializer,
FrameCommentSerializer,
AuthorSerializer,
FrameGetAuthorSerializer,
FrameGetAuthorCommentSerializer
)
from GlobalModels.models import (
Location,
Skills,
Field_of_work,
Tools,
Frame,
Frame_comment
)
from GlobalModels.api.form import FrameForm


#from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponseRedirect
#from django.core.urlresolvers import reverse
User = get_user_model()

class LocationViewSet(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all()

class SkillsViewSet(viewsets.ModelViewSet):
    serializer_class = SkillsSerializer
    queryset = Skills.objects.all()

class FieldOfWorkViewSet(viewsets.ModelViewSet):
    serializer_class = FieldOfWorkSerializer
    queryset = Field_of_work.objects.all()

class ToolsViewSet(viewsets.ModelViewSet):
    serializer_class = ToolsSerializer
    queryset = Tools.objects.all()

class FrameListView(generics.ListAPIView):
    serializer_class = FrameSerializer
    queryset = Frame.objects.all()

class FrameDetailView(generics.UpdateAPIView):
    serializer_class = FrameSerializer
    queryset = Frame.objects.all()

#CREATE frame
class FrameCreateView(generics.CreateAPIView):
    serializer_class = FrameSerializer
    class Meta:
      model = Frame
      fields = (
      'id',
      'title',
      'description',
      'author',
      'frameFile',
      'frame_picture',
      'date_uploaded',
      'last_moddified',)


    def create(self, validated_data):
      return Frame.objects.create(
        title=validated_data['title'],
        description=validated_data['description'],
        author = validated_data['author'],
        frameFile = validated_data['frameFile'],
        frame_picture = validated_data['frame_picture'],
      )


#get all frames by author
# class FrameByAuthor(generics.ListAPIView):
#     serializer_class = FrameSerializer
#     def get_queryset(self):
#         username = self.kwargs['username']
#         return Frame.objects.filter(author__username=username)


class FrameByAuthor(viewsets.ModelViewSet):
    serializer_class = FrameGetAuthorSerializer
    queryset = Frame.objects.all()
    filterset_fields = ('author__username', 'author__id' )



class FrameViewSet(viewsets.ModelViewSet):
    permission_classes = [
      permissions.IsAuthenticated,
    ]
    serializer_class = FrameSerializer
    queryset = Frame.objects.all()
    filterset_fields = ('author__id', )

class FrameAuthorCommentViewSet(viewsets.ModelViewSet):
    serializer_class = FrameGetAuthorCommentSerializer
    queryset = Frame_comment.objects.all()
    filterset_fields = ('post__id', )


class FrameCommentViewSet(viewsets.ModelViewSet):
    serializer_class = FrameCommentSerializer
    queryset = Frame_comment.objects.all()
    filterset_fields = ('post__id', )

def delete(self, request, format=None):
    Frame.frameFile.delete(save=True)
    return Response(status=status.HTTP_204_NO_CONTENT)
