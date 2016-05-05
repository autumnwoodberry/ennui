from django.conf.urls import include
from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
    url(r'^$', include('colorful.urls')),
    url(r'^maze/', include('maze.urls')),
    url(r'^admin/', include(admin.site.urls)),
]
