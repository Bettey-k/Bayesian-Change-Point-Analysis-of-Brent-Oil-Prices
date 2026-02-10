from flask import Blueprint, jsonify

changepoints_bp = Blueprint("changepoints", __name__)

@changepoints_bp.route("/api/changepoints", methods=["GET"])
def get_changepoints():
    return jsonify({
        "change_point_date": "2020-03-01",
        "mu_before": "low volatility",
        "mu_after": "high volatility",
        "associated_events": [
            "COVID-19 pandemic",
            "OPEC+ production cuts"
        ]
    })
