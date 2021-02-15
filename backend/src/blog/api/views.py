from rest_framework import viewsets
from blog.models import Story, Comment
from .serializers import StorySerializer, CommentSerializer, StoryAuthorInfoSerializer
import django_filters

class StoryViewSet(viewsets.ModelViewSet):
    serializer_class = StorySerializer
    queryset = Story.objects.all()
    filterset_fields = ('author__username', )

class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

class StoryAuthorInfoViewSet(viewsets.ModelViewSet):
    serializer_class = StoryAuthorInfoSerializer
    queryset = Story.objects.all()
    filterset_fields = ('author__username', )


    # from rest_framework.generics import (
    # ListAPIView,
    # RetrieveAPIView,
    # CreateAPIView,
    # DestroyAPIView,
    # UpdateAPIView
    # )
    #
    #
    # class StoryListView(ListAPIView):
    #     queryset = Story.objects.all()
    #     serializer_class = StrorySerializer
    #
    # class StoryDetailView(RetrieveAPIView):
    #     queryset = Story.objects.all()
    #     serializer_class = StrorySerializer
    #
    # class StoryCreateView(CreateAPIView):
    #     queryset = Story.objects.all()
    #     serializer_class = StrorySerializer
    #
    # class StoryDestroyView(DestroyAPIView):
    #     queryset = Story.objects.all()
    #     serializer_class = StrorySerializer
    #
    # class StoryUpdateView(UpdateAPIView):
    #     queryset = Story.objects.all()
    #     serializer_class = StrorySerializer
