from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from .api import (
RegisterAPI,
LoginAPI,
UserAPI,
ChangePasswordAPIView,
PersonalInfoUpdateAPI,
ProfessionalInfoUpdateAPI,
LocationInfoUpdateAPI,
AllDesignersAPIView,
UserAvatarUploadAPIview,
CompanyInfoUpdateAPI,

)
from .views import ChangePasswordView, AllUsersAPIView, UserDetail
from knox import views as knox_views

#from .views import UserAPIView, RegisterAPIView, LoginAPIView

urlpatterns = [
    path('auth', include('knox.urls')),
    path('auth/register', RegisterAPI.as_view()),
    path('auth/login', LoginAPI.as_view()),
    path('auth/user', UserAPI.as_view()),
    path('auth/allusers', AllUsersAPIView.as_view()),
    path('auth/alldesigners', AllDesignersAPIView.as_view()),
    path('auth/user/<int:pk>/', UserDetail.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('auth/update/password/', ChangePasswordAPIView.as_view()),
    path('auth/update/personal-info/<int:pk>', PersonalInfoUpdateAPI.as_view()),
    path('auth/update/proffesional-info/<int:pk>', ProfessionalInfoUpdateAPI.as_view()),
    path('auth/update/location-info/<int:pk>', LocationInfoUpdateAPI.as_view()),
    path('auth/update/avatar/<int:pk>', UserAvatarUploadAPIview.as_view()),
    path('auth/update/company-info/<int:pk>', CompanyInfoUpdateAPI.as_view()),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
