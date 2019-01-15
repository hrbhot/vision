import requests
import base64
import json

url = "http://localhost:9001"


def check_detect(data):
    r = requests.post(url + "/api/detect", data=data,
                      headers={'Content-Type': 'application/json'}, timeout=5)
    return r.status_code


if __name__ == "__main__":
    with open("threearts.jpg", "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
    encoded_string = encoded_string.decode("utf-8")
    data = {}
    data["content"] = encoded_string
    json_data = json.dumps(data)
    print(json_data)
    print(check_detect(json_data))
