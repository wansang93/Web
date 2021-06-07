# Django & React Full Stack Web App Tutorial

- 2021.03.24 ~ 

youtube link -> [https://www.youtube.com/playlist?list=PLzMcBGfZo4-kCLWnGmK0jUBmGLaJxvi4j]

## 1. Full Stack Web App With Python & JavaScript

### 1-1. Install & Start

Install List
- Python
- npm
- VScode(Extension)
  - Prittier
  - Python
  - Django
  - ES7 React/Redux/~ snippets
  - JavaScript (ES6) code snippets

```bash
pip install django djangorestframework
django-admin startproject <project_name>
django-admin startapp <app_name>
```

### 1-2. Create api class in `app.py`

go to `settings.py` then add the below

```python
INSTALLED_APPS = [
    '<app_name>.apps.<ClassName>',
]
```

check to create automatically class in `apps.py`

### 3. Create rest_framework app

go to `manage.py` then add the below

```python
INSTALLED_APPS = [
    '<rest_framework>',
]
```

### 1-4. Create function

go to `<app_name>/views.py` then add the below

```python
from django.http import HttpResponse

def main(request):
    return HttpResponse("Hello Wansang")
```

### 1-5. url

create a file `urls.py` in `<api_app>`

go to `<main_project>/urls.py` then add the below

```python
from djanog.urls import include

urlpatterns = [
    path('<end_point>/', include('<app_name>.urls')),
]
```

back to `<api_app>/urls.py` then add the below

```python
from .views import <funciton_name>

urlpatterns = [
    path('<path.name>', include('<function_name>')),
]
```

### 1-6. make migrations

```bash
python ./manage.py makemigrations
python migrate
python ./manage.py runserver  # runserver
```

## 2. Django REST Framework

### 2-1. Create models

go to `<app_name>/models.py` then add the below

Create a concept of a Room Model

```python
import string
import random

# generate uique code to create room
def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break
    
    return code


class Room(models.Model):
    code = models.CharField(max_length=8, default="", unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)
```

```bash
python ./manage.py makemigrations
python ./manage.py migrate
```

### 2-2. Use rest_framework to create JSON format for Front end

TODO: Does title correct?

make a new file `serializers.py` in `<app_name>`

```python
from rest_framework import serializers
from .models import Room


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'guest_can_pause',
                  'votes_to_skip', 'created_at')
```

### 2-3. Views.py

go to `<app_name>/views.py` then add the below

```python
from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
```

### 2-4. URL pages

`<app_name>/urls.py`

```python
from .views import RoomView

urlpatterns = [
    path('room', RoomView.as_view()),
]
```

### 2-5. Run server

```python
python ./manage.py runserver
```

go to `127.0.0.1:8000/api/room` then check

## 3. React Integration Using Webpack & Babel

### 3-1. Create frontend app

open bash then go to `<Project_name>`

```bash
django-admin startapp <frontend_app>
```

`frontend_app` is frontend, `app_name` is backend

create 2 folder `static`, `src` in `<frontend_app>`

go to `<frontend_app>` then open bash

```bash
npm init -y
```

### 3-1. 

```bash
npm i webpack webpack-cli --save-dev
npm i @babel/core babel-loader @babel/preset-env @ babel/preset-react --svae-dev
npm i react react-dom
npm install @material-ui/core
npm install @babel/plungin-proposal-class-properties
npm install react-router-dom
npm install @material-ui/icons
```

## 4. React Router and Building Componets

