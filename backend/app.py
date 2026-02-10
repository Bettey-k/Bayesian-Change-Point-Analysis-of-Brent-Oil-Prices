from flask import Flask
from flask_cors import CORS

from backend.routes.prices import prices_bp
from backend.routes.events import events_bp
from backend.routes.changepoints import changepoints_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(prices_bp)
app.register_blueprint(events_bp)
app.register_blueprint(changepoints_bp)

@app.route("/")
def home():
    return {"message": "Brent Oil Dashboard API is running"}

if __name__ == "__main__":
    app.run(debug=True)
