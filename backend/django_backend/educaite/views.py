from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from langchain.llms import Ollama
from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
import json
from .llm import llm_main
from django.http import HttpResponse
from .ingest import ingest_main
import os
from django.core.files.uploadhandler import TemporaryFileUploadHandler
from django.conf import settings

@csrf_exempt
def llm_view(request):
    if request.method == 'POST':
        # Attempt to get input from JSON in the raw body
        try:
            input_data = json.loads(request.body.decode('utf-8'))
            input_text = input_data.get('input')
            user_name=input_data.get("user_name")
            unique_id=input_data.get("unique_id")
            output_type=input_data.get("output_type", "chat")  


        except json.JSONDecodeError:
            # If JSON decoding fails, fall back to form data
            input_text = request.POST.get('input')
            user_name = request.POST.get('user_name')
            unique_id = request.POST.get('unique_id')

        if not input_text:
            return JsonResponse({'error': 'Input text is required'}, status=400)

        try:
            output = llm_main(input_text,user_name,unique_id,output_type)
            return JsonResponse({'output': output, 'status': 'completed'})
            
        except ValueError as e:
            return JsonResponse({'error': str(e), 'status': 'error'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=400)


# your_app_name/views.py


@csrf_exempt
def upload_file(request):
    if request.method == 'POST':
        try:
            user_name = request.POST.get('user_name')
            unique_id = request.POST.get('unique_id')

            # Create a folder for user_name if it doesn't exist in "educaite/source_documents"
            user_folder = os.path.join(settings.MEDIA_ROOT, 'educaite', 'source_documents')
            os.makedirs(user_folder, exist_ok=True)

            # Use TemporaryFileUploadHandler to handle file upload and cleanup
            handler = TemporaryFileUploadHandler(request)
            file_uploaded = request.FILES.get('file_content')

            # Ensure a file is uploaded
            if file_uploaded:
                # Move the received file to "educaite/source_documents"
                destination_path = os.path.join(user_folder, file_uploaded.name)

                with open(destination_path, 'wb+') as destination:
                    # Write chunks to the destination file
                    for chunk in file_uploaded.chunks():
                        destination.write(chunk)

                # Process the file using a custom function (you need to define ingest_main)
                ingest_main(user_name, unique_id)

                # Delete the file after successful processing
                os.remove(destination_path)

                return JsonResponse({"message":"File processed successfully and deleted!"},status=200)
            else:
                return JsonResponse({"error":"No file provided in the request."}, status=400)

        except Exception as e:
            return HttpResponse(f"Error processing the file: {str(e)}")

    return HttpResponse("Invalid request method")