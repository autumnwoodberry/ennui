from colorful import views
from django.conf.urls import url

urlpatterns = [
    url(r'^$', views.index, name='colorful-index')
]
