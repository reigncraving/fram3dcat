from rest_framework import viewsets
from jobBoard.models import Job, Job_comment
from .serializers import JobSerializer, JobCommentSerializer

class JobViewSet(viewsets.ModelViewSet):
    serializer_class = JobSerializer
    queryset = Job.objects.all()

class JobCommentViewSet(viewsets.ModelViewSet):
    serializer_class = JobCommentSerializer
    queryset = Job_comment.objects.all()
