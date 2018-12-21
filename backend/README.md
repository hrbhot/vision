# Vision Backend

### Make it run
To install all the missing packages
```
Python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
The service is now using [Google cloud vision](https://cloud.google.com/vision/), so before you run the application, you nned to activate your google cloud vision account(follow the [documentation](https://cloud.google.com/vision/docs/quickstart)), download the account private key file and set the path to the Private key file.
```
export GOOGLE_APPLICATION_CREDENTIALS='path/to/private_key_file'
``` 

### Test
```
cd test/
python -m unittest -v
```

### APIs
```
[POST] http://service.url/api/detect/
```
REQUEST
```
Content-Type: application/json
{'content': 'Base64 Image'}
```
RESPONSE
```
[{
  mid: "/m/04gdr"
  description: "Louvre, Winged Victory of Samothrace"
  score: 0.7389511466026306
  bounding_poly {
    vertices {
      x: 805
      y: 174
    }
    vertices {
      x: 931
      y: 174
    }
    vertices {
      x: 931
      y: 474
    }
    vertices {
      x: 805
      y: 474
    }
  }
  locations {
    lat_lng {
      latitude: 48.860106
      longitude: 2.336826
    }
  }
},{...}]
```
