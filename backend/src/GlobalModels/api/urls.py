from rest_framework.routers import DefaultRouter
from django.urls import re_path
from django.urls import path
from GlobalModels.api.views import (
LocationViewSet,
SkillsViewSet,
FieldOfWorkViewSet,
ToolsViewSet,
FrameListView,
FrameCommentViewSet,
FrameByAuthor,
FrameCreateView,
FrameViewSet,
FrameByAuthor,
FrameCommentViewSet,
FrameAuthorCommentViewSet,
)

router = DefaultRouter()
router.register(r'location', LocationViewSet, basename='location')
router.register(r'skills', SkillsViewSet, basename='skills')
router.register(r'field', FieldOfWorkViewSet, basename='field')
router.register(r'tools', ToolsViewSet, basename='tools')
router.register(r'frames', FrameViewSet, basename='frames')
router.register(r'frame_author', FrameByAuthor, basename='frame_author')
router.register(r'comment', FrameCommentViewSet, basename='comments')
router.register(r'comment_author', FrameAuthorCommentViewSet, basename='comment-author')

urlpatterns = router.urls

# urlpatterns = [
#     path('frames/', FrameListView.as_view()),
#     path('frames/create/', FrameCreateView.as_view()),
#     re_path(r'^frames/by/(?P<username>\w+)/$', FrameByAuthor.as_view(), ),
# ]
