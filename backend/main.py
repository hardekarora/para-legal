from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
import os

from secretkey import key  # Make sure to import your OpenAI API key properly

os.environ["OPENAI_API_KEY"] = key

# Your code to process the document variable goes here...
def process_document(document):
    llm = OpenAI(model="gpt-3.5-turbo-instruct", temperature=0.7)

    prompt_template = PromptTemplate(
        input_variables=['document'],
        template="Convert this legal language into something more readable // {document}"
    )

    chain = LLMChain(llm=llm, prompt=prompt_template)
    result = chain.run(document)
    return result

# This part of the code will be executed when a POST request is received
if __name__ == "__main__":
    document = os.environ.get('document')
    if document:
        processed_result = process_document(document)
        print(processed_result)
    else:
        print("No document provided.")
