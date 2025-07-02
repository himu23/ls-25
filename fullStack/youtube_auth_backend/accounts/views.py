from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .forms import RegisterForm
import uuid

tokens = {}

def register_view(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False  # simulate email verification
            user.save()
            token = str(uuid.uuid4())
            tokens[token] = user.username
            return redirect(f'/verify/{token}/')
    else:
        form = RegisterForm()
    return render(request, 'register.html', {'form': form})

def verify_view(request, token):
    username = tokens.get(token)
    if username:
        user = User.objects.get(username=username)
        user.is_active = True
        user.save()
        del tokens[token]
        return render(request, 'verify.html', {'message': 'Account Verified Successfully'})
    return render(request, 'verify.html', {'message': 'Invalid Token'})

def login_view(request):
    if request.method == 'POST':
        uname = request.POST['username']
        pword = request.POST['password']
        user = authenticate(request, username=uname, password=pword)
        if user:
            login(request, user)
            return redirect('/dashboard/')
        else:
            return render(request, 'login.html', {'error': 'Invalid credentials'})
    return render(request, 'login.html')

def logout_view(request):
    logout(request)
    return redirect('/login/')

@login_required
def dashboard_view(request):
    return render(request, 'dashboard.html', {'user': request.user})
