from jobBoard.api.views import JobViewSet, JobCommentViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', JobViewSet, basename='jobs')
router.register(r'comments/', JobCommentViewSet, basename='comments')
urlpatterns = router.urls
