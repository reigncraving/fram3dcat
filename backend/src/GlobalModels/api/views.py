from rest_framework import viewsets
from rest_framework import generics
from django.contrib.auth import get_user_model
from .serializers import (
LocationSerializer,
SkillsSerializer,
FieldOfWorkSerializer,
ToolsSerializer,
FrameSerializer,
FrameCommentSerializer
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

#get all frames by author
class FrameByAuthor(generics.ListAPIView):
    serializer_class = FrameSerializer
    def get_queryset(self):
        username = self.kwargs['username']
        return Frame.objects.filter(author__username=username)


class FrameCommentViewSet(viewsets.ModelViewSet):
    serializer_class = FrameCommentSerializer
    queryset = Frame_comment.objects.all()

def delete(self, request, format=None):
    Frame.frameFile.delete(save=True)
    return Response(status=status.HTTP_204_NO_CONTENT)

