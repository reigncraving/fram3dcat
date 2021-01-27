"""fram3dcat URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

#production ?
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('stories/', include('blog.api.urls')),
    path('jobs/', include('jobBoard.api.urls')),
    path('global/', include('GlobalModels.api.urls')),
    path('accounts/', include('accounts.api.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    # path('rest-auth/registration/', include('rest_auth.registration.urls')),
    # path('api-auth/', include('rest_framework.urls')),
    #path('auth/', include('accounts.api.urls'))
]
#static media find file
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
