# To run Flask from VS Code, first type in: $env:FLASK_APP = "application.py"
#  and then: python -m flask run 

# imports Flask
from flask import Flask, render_template, Markup

# serves up the flask application from this file.
app = Flask(__name__)


# defines the nav bar, to be rendered for each page.
nav_bar = Markup("""
  <nav class="w3-bar w3-black" class="navbar" style="font-family: verdana" style="font-family: verdana">
    <a href="/" class="w3-button w3-bar-item">Homepage</a>
    <a href="/bg_page.html" class="w3-button w3-bar-item">Backgrounds</a>
    <a href="/js_page.html" class="w3-button w3-bar-item">Fun with Javascript</a>
    <a href="/forms.html" class="w3-button w3-bar-item">Forms and Data</a>
    <a href="/flask_page.html" class="w3-button w3-bar-item">Back End with Flask</a>
  </nav>
""")

@app.route("/")
def index():
    return render_template("index.html", nav_bar = nav_bar)

@app.route("/bg_page.html")
def bg_page():
    return render_template("bg_page.html", nav_bar = nav_bar)

@app.route("/js_page.html")
def js_page():
    return render_template("js_page.html", nav_bar = nav_bar)

@app.route("/forms.html")
def forms():
    return render_template("forms.html", nav_bar = nav_bar)

@app.route("/flask_page.html")
def flask_page():
    return render_template("flask_page.html", nav_bar = nav_bar)




