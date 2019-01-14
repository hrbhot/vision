import unittest
import testAPI
import base64
import json
import testGoogleCloudAPI as testGoogle


class TestAPIs(unittest.TestCase):

    def test_google_api(self):
        self.assertTrue(testGoogle.test_google_api())

    def test_detect_without_data(self):
        self.assertEqual(testAPI.check_detect(None), 400)

    def test_detect_with_data(self):
        with open("threearts.jpg", "rb") as image_file:
            encoded_string = base64.b64encode(image_file.read())
        encoded_string = encoded_string.decode("utf-8")
        data = {}
        data["content"] = encoded_string
        json_data = json.dumps(data)
        self.assertEqual(testAPI.check_detect(json_data), 200)


if __name__ == '__main__':
    unittest.main()
