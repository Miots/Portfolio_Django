from django.urls import path
from . import views
from .views import send_email

urlpatterns = [
    path('', views.home, name='home'),
    path("send_email/", send_email, name="send_email"),
]
