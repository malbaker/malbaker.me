import os
from flask import Flask, render_template, request
from dotenv import load_dotenv
from peewee import *
import datetime
from playhouse.shortcuts import model_to_dict

load_dotenv()
app = Flask(__name__)


# Dictionary holding personal info
mydata = {'malik': {"firstname": "Malik's",
                  "name": "Malik Baker", 
                  "university": "Boston University", 
                  "degree": "BA, Computer Science", 
                  "years": "2020-2024", 
                  "linkedin": "https://www.linkedin.com/in/malbaker/", 
                  "github": "https://www.github.com/malbaker/", 
                  "activities": "Activities: BUILDS (BU Innovation Lab and Design Space)", 
                  "visited": [["USA", [37.09, -95.71]], ["Jamaica", [18.1, -77.29]]], 
                  "skills": ["Java", "Python", "C", "Linux", "Git", "Bash", "HTML", "CSS", "Bash"], 
                  "about": "I am currently a rising Junior at Boston University pursuing my Bachelor's degree in Computer Science. Within the scope of technology, my passions include open-source software, web development and systems engineering. Outside of that I enjoy listening to music, watching movies, playing the guitar, or tinkering with my custom-built PC or keyboard.", 
                  "seal": "boston"}
        }

# Routing data from dictionary to be displayed on landing page
@app.route('/')
def member(member="malik"):
    person = mydata[member]
    return render_template(f'{member}.html',
                           title="MLH Fellow",
                           name=person["name"],
                           university=person["university"],
                           member=member, url=os.getenv("URL"),
                           linkedin=person["linkedin"],
                           github=person["github"],
                           degree=person["degree"],
                           years=person["years"],
                           activities=person["activities"],
                           skills=person["skills"],
                           about=person["about"],
                           seal=person["seal"],
                           firstname=person["firstname"])
