from secretkey import key 
import os 
from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
os.environ["OPENAI_API_KEY"]=key
document = os.environ.get('document')

# Your code to process the document variable goes here...


llm = OpenAI(model="gpt-3.5-turbo-instruct", temperature=0.7)

prompt_template = PromptTemplate(
    input_variables=['document'],
    template= "Convert this legal language into something more readable // {document}"
)

chain = LLMChain(llm=llm,prompt=prompt_template)
chain.run(document)