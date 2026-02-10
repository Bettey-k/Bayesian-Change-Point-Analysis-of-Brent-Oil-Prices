from flask import Blueprint, jsonify
from backend.utils.data_loader import load_events

events_bp = Blueprint("events", __name__)

@events_bp.route("/api/events", methods=["GET"])
def get_events():
    df = load_events()
    return jsonify(df.to_dict(orient="records"))
