from blog.api.views import StoryViewSet, CommentViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', StoryViewSet, basename='stories')
router.register(r'comments', CommentViewSet, basename='comments')
urlpatterns = router.urls


#url is empty string for is set in settings' urls

#oldway:

# from django.urls import path
# from .views import (
# StoryListView,
# StoryDetailView,
# StoryCreateView,
# StoryDestroyView,
# StoryUpdateView
# )
#
# urlpatterns = [
#     path('', StoryListView.as_view()),
#     path('create/', StoryCreateView.as_view()),
#     path('<pk>', StoryDetailView.as_view()),
#     path('<pk>/update', StoryUpdateView.as_view()),
#     path('<pk>/destroy', StoryDestroyView.as_view()),
# ]
