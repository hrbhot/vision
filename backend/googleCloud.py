from google.cloud import vision
from google.cloud.vision import types
from google.protobuf.json_format import MessageToJson
import base64
import json

client = vision.ImageAnnotatorClient()


def landmark_detection(image_string):
    image_utf8 = image_string.encode("utf-8")
    image_base64 = base64.b64decode(image_utf8)
    image = types.Image(content=image_base64)
    response = client.landmark_detection(image=image)
    resp_json = MessageToJson(response, preserving_proto_field_name=True)
    json_data = json.loads(resp_json)
    landmarks = json_data["landmark_annotations"]
    return landmarks
