from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('menu', views.menu, name='menu'),
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('edit', views.edit, name='edit'),
    path('book', views.book, name='book'),
]