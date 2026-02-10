from flask import Blueprint, jsonify
from backend.utils.data_loader import load_prices

prices_bp = Blueprint("prices", __name__)

@prices_bp.route("/api/prices", methods=["GET"])
def get_prices():
    df = load_prices()
    return jsonify(df.to_dict(orient="records"))
