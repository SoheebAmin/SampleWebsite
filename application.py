# To run Flask from VS Code, first type in: $env:FLASK_APP = "application.py"
#  and then: python -m flask run 

# imports Flask
from flask import Flask, render_template


# serves up the flask application from this file.
app = Flask(__name__)

@app.route("/")

def index():
    var = "This Text is from Flask."
    return render_template("index.html", var = var)

def bg_page():
    return render_template("bg_page.html")

def forms():
    return render_template("forms.html")

def js_page():
    return render_template("js_page.html")


