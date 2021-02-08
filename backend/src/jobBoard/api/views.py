from rest_framework import viewsets
from jobBoard.models import Job, Job_comment
from .serializers import JobSerializer, JobCommentSerializer, JobSerializerAuthorDetail
import django_filters

class JobViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    queryset = Job.objects.all()
    filterset_fields = ('author__username', )

class JobCommentViewSet(viewsets.ModelViewSet):
    serializer_class = JobCommentSerializer
    queryset = Job_comment.objects.all()
    filterset_fields = ('author__username', )

class JobViewSetAuthorInfo(viewsets.ModelViewSet):
    serializer_class = JobSerializerAuthorDetail
    queryset = Job.objects.all()
    filterset_fields = ('author__username', )
