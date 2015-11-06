from django.conf.urls import include
from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
    url(r'^$', include('colorful.urls')),
    url(r'^photos/', include('photos.urls')),
    url(r'^admin/', include(admin.site.urls)),
]
