from flask import Flask, request, jsonify
from flask_assets import Environment
from flask_cors import CORS, cross_origin
import logging

import googleCloud

app = Flask(__name__)
assets = Environment(app)
app.debug = True

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
logging.getLogger('flask_cors').level = logging.DEBUG


@app.route("/api/detect", methods=['POST'])
@cross_origin(allow_headers=['Content-Type'])
def detect():
    data = request.json
    image_string = data['content']
    resp_data = googleCloud.landmark_detection(image_string)
    json_data = jsonify(resp_data)
    return json_data


if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True)
