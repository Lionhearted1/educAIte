# educate/urls.py

from django.urls import path
from  .views import llm_view,upload_file

urlpatterns = [
    path('chat/', llm_view, name='get_ollama_output'),
    path('file/', upload_file, name='get_output'),
]
