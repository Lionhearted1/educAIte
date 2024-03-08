#!/usr/bin/env python3
from langchain.chains import RetrievalQA
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.vectorstores import Chroma
from langchain.callbacks.manager import CallbackManager
from langchain.llms import Ollama
import os
import json
import re


embeddings_model_name = os.environ.get("EMBEDDINGS_MODEL_NAME", "all-MiniLM-L6-v2")
target_source_chunks = int(os.environ.get('TARGET_SOURCE_CHUNKS',4))

def format_string(input_string):
    input_string = re.sub(r'"educaite\\"', '"educaite"', input_string)
    input_string = re.sub(r'"educAIte\\"', '"educAIte"', input_string)
    try:
        # Try to parse the input string as JSON
        json_data = json.loads(input_string)
        
        # Check if it has the expected structure
        if 'answer' in json_data:
            return input_string  # It's already in the desired format
    except json.JSONDecodeError:
        pass  # The input is not in JSON format, proceed to modify

    # Convert the string to the desired format
    formatted_string = json.dumps({"answer": input_string})

    return formatted_string




def llm_main(query,user_name,unique_id,output_type):
    embeddings = HuggingFaceEmbeddings(model_name=embeddings_model_name)
    db = Chroma(persist_directory=f"educaite/{user_name}/{unique_id}", embedding_function=embeddings)

    retriever = db.as_retriever(search_kwargs={"k": target_source_chunks})

    callbacks=[StreamingStdOutCallbackHandler()]
    # callbacks=[] 
    if output_type=="chat":
        model = os.environ.get("MODEL", "chatbot")

    elif output_type=="quiz":
        model = os.environ.get("MODEL", "quizbot")

    elif output_type=="grade":
        model = os.environ.get("MODEL", "gradebot")

    llm = Ollama(
            model=model, callback_manager=CallbackManager(callbacks)
        )

    qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=retriever,return_source_documents= False)

    res = qa(query)
    answer = res['result']
    # return answer
    if output_type == "quiz":
        corrected_json_string = re.sub(r'"quiz\\_questions"', '"quiz_questions"', answer)
        corrected_json_string = re.sub(r'"correct\\_option\\_index"', '"correct_option_index"', corrected_json_string)
        corrected_json_string = re.sub(r'"questions\\"', '"questions"', corrected_json_string)
        corrected_json_string = re.sub(r'"options\\"', '"options"', corrected_json_string)
        
    elif output_type=="chat" or output_type=="grade":
        corrected_json_string=format_string(answer)
    
    else:
        formatted_json = json.loads(answer)
    
    formatted_json = json.loads(corrected_json_string)
    

    return formatted_json






