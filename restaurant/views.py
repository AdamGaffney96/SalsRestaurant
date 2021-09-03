from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'restaurant/home.html')

def menu(request):
    return render(request, 'restaurant/home.html')

def login(request):
    return render(request, 'restaurants/home.html')

def logout(request):
    return render(request, 'restaurants/home.html')

def edit(request):
    return render(request, 'restaurants/home.html')

def book(request):
    return render(request, 'restaurants/home.html')