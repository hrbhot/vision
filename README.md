# vision
vision

-----
## Ops

[![Layers](https://shields.beevelop.com/docker/image/layers/beevelop/ionic/latest.svg?style=flat-square)](https://links.beevelop.com/d-ionic)
[![Size](https://shields.beevelop.com/docker/image/size/beevelop/ionic/latest.svg?style=flat-square)](https://links.beevelop.com/d-ionic)
[![Release](https://shields.beevelop.com/github/release/beevelop/docker-ionic.svg?style=flat-square)](https://github.com/beevelop/docker-ionic/releases)

-----
## Environment one-click
```
- nginx:1.14.0
- python:Python 3.6.6
- mongodb:4.0.4
- flask
- uwsgi
- supervisor
- nodejs:10.14.2

```

## Getting started

[Mac](https://docs.docker.com/docker-for-mac/install/)
[Windows](https://docs.docker.com/docker-for-windows/install/) Requires Microsoft Windows 10 Professional or Enterprise 64-bit.
[Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
[CentOS](https://docs.docker.com/install/linux/docker-ce/centos/)
[Debian](https://docs.docker.com/install/linux/docker-ce/debian/)

## How to use
The sample app is in the “env” directory.

To see it in action:
```
$ cd env && docker-compose up -d
```
- this will build and start all the services
- the web UI will be available on port 9001

```
Nginx   port 9001
Flask   port 5000
mongoDB port 27777
Nodejs  port 30000
```
File structure
```
.
├── conf                        # Configuration directory
│   └── nginx                   # Nginx configuration directory
│       └── conf.d              # Nginx configuration directory
│           └── default.conf    # Nginx configuration file
├── df                          # Docker file directory
│   ├── flask                   # Flask CONFIG DIR
│   │   └── Dockerfile          # Flask Docker configuration file
│   ├── ionic                   # Ionic CONFIG DIR
│   │   └── Dockerfile          # Ionic Docker configuration file
│   ├── nginx                   # Nginx CONFIG DIR
│   │   └── Dockerfile          # Nginx Docker configuration file
│   └── nodejs                  # Nodejs CONFIG DIR
│       └── Dockerfile          # Nodejs Docker configuration file
├── docker-compose.yml          # docker-compose Configuration file
├── nodejs                      # Nodejs demo workspace
│   ├── package.json            # npm configuration example
│   └── server.js               # js example hello world



### Use as base image
```Dockerfile
FROM beevelop/ionic:latest
```

----
## Backend

### Make it run
To install all the missing packages
```
cd backend
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

----
## Data collecting

### What does it do?

In order to train a model to classify the artworks in Louvre, we need a huge amount of data.

To collect the data, we find a website called [IMAGE D'ART](http://art.rmngp.fr). The goal of this part is to collect images and label them automatically using a spider.

We have found that some of the artworks has only 1 image on the website, so we also used google to collect more images as to make sure we have a big enough training set.

### How to use?

Basically you will find all you need by using --help

```
cd backend/data
python miner.py -h/--help
```

### Features

##### Clear

To remove all the items in the database.

##### Generate

Parse IMAGE D'ART to get information and pictures and put them into database.

##### Description (need 'Generate' to be execute)

Searching from google to get the introduction of artworks for future use.

##### Image (need 'Generate' to be execute)

Searching from google to get the related images for future training.

##### Download (need 'Generate' to be execute)

Download images to local.

----
## Front-end

### Prepare
Gradle is not necessary is recommended to install the latest version

### Android
Android studio and its licenses are not essential to run the application if you have had and android telephone.

**How ever android sdk is needed**

The android version of the phone is better to be higher than Android 5. 


### Node environment
1. Install NodeJs
2. Run `npm install -g ionic cordova` to install ionic3 and cordova
3. At the directory of projedt run `npm install`
4. Run `ionic cordova platform add android` to build android project
5. Connect phone to pc and change phone to devlop mode.
6. Run `ionic cordova run android` to build an apk and run on the phone.
