from jobBoard.api.views import JobViewSet, JobCommentViewSet, JobViewSetAuthorInfo
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'all', JobViewSet, basename='jobs')
router.register(r'comments/', JobCommentViewSet, basename='comments')
router.register(r'author', JobViewSetAuthorInfo, basename='author')
urlpatterns = router.urls
