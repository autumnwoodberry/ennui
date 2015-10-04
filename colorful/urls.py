from django.conf.urls import url
from colorful import views

urlpatterns = [
    url(r'^$', views.index, name='colorful-index')
]
