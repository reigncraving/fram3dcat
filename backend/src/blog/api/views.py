from rest_framework import viewsets
from blog.models import Story, Comment
from .serializers import StorySerializer, CommentSerializer

class StoryViewSet(viewsets.ModelViewSet):
    serializer_class = StorySerializer
    queryset = Story.objects.all()

class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

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
