import io
import os

# Imports the Google Cloud client library
from google.cloud import vision
from google.cloud.vision import types

# Instantiates a client
client = vision.ImageAnnotatorClient()


def label_detection(image):
    response = client.label_detection(image=image)
    labels = response.label_annotations


def landmark_detection(image):
    response = client.landmark_detection(image=image)
    landmarks = response.landmark_annotations


def test_google_api():
    file_name = os.path.join(
        os.path.dirname(__file__),
        'threearts.jpg')

    # Loads the image into memory
    with io.open(file_name, 'rb') as image_file:
        content = image_file.read()

    image = types.Image(content=content)
    try:
        label_detection(image)
        landmark_detection(image)
    except ValueError:
        return False
    return True


if __name__ == "__main__":
    # The name of the image file to annotate
    file_name = os.path.join(
        os.path.dirname(__file__),
        'threearts.jpg')

    # Loads the image into memory
    with io.open(file_name, 'rb') as image_file:
        content = image_file.read()

    image = types.Image(content=content)

    # Performs label detection on the image file
    label_detection(image)
    landmark_detection(image)
