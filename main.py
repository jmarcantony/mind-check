from flask import Flask, render_template
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

@app.get("/")
def index():
	return render_template("index.html")

if __name__ == "__main__":
	app.run(host="0.0.0.0", debug=True)