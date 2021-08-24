from flask import Flask, render_template
from firebase_admin import credentials
from firebase_admin import firestore
from dotenv import load_dotenv
import firebase_admin
import os

load_dotenv()

GOOGLE_APPLICATION_CREDENTIALS = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")

app = Flask(__name__)

cred = credentials.Certificate(GOOGLE_APPLICATION_CREDENTIALS)
firebase_admin.initialize_app(cred)

db = firestore.AsyncClient()

@app.get("/")
def index():
	return render_template("index.html")

if __name__ == "__main__":
	app.run(host="0.0.0.0", debug=True)