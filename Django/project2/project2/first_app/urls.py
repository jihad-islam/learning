from django.urls import path

from first_app import views
# from first_app.views import home # direct function ta import kora hoyeche
# from . import views

urlpatterns = [
    path('', views.home),
]
