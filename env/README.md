# vision
vision

<<<<<<< HEAD

=======
>>>>>>> upstream/develop
-----
## Ops

[![Layers](https://shields.beevelop.com/docker/image/layers/beevelop/ionic/latest.svg?style=flat-square)](https://links.beevelop.com/d-ionic)
[![Size](https://shields.beevelop.com/docker/image/size/beevelop/ionic/latest.svg?style=flat-square)](https://links.beevelop.com/d-ionic)
[![Release](https://shields.beevelop.com/github/release/beevelop/docker-ionic.svg?style=flat-square)](https://github.com/beevelop/docker-ionic/releases)

# Latest Ionic
### based on the latest Cordova with the latest Android and the latest Node.js


### Run image
```
docker run -it beevelop/ionic bash
```

### Use as base image
```Dockerfile
FROM beevelop/ionic:latest
```
<<<<<<< HEAD
## Environment one-click
```
nginx:1.14.0
python:Python 3.6.6
mysql:5.7
mongodb:4.0.4
flask
uwsgi
supervisor
mysql:5.7
nodejs:10.14.2

```

### Getting started

[Mac](https://docs.docker.com/docker-for-mac/install/)  
[Windows](https://docs.docker.com/docker-for-windows/install/) Requires Microsoft Windows 10 Professional or Enterprise 64-bit.  
[Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)  
[CentOS](https://docs.docker.com/install/linux/docker-ce/centos/)  
[Debian](https://docs.docker.com/install/linux/docker-ce/debian/)  

#### Linux Containers
Run in this directory:
```
docker-compose up -d
```

```
├── conf                    Configuration directory
│   ├── mysql               MySql configuration directory
│   └── nginx               Nginx configuration directory
│       └── conf.d          Site profile directory
├── docker-compose.yml      docker-compose Configuration file
├── flask                   Flask directory
│   └── Dockerfile          Docker configuration file
├── log                     Log directory
├── mongo                   MongoDB data file directory
├── mysql                   MySql data file directory
├── nginx                   Nginx directory
│   └── Dockerfile          Nginx configuration file
├── nodejs                  Nodejs workspace
│   ├── Dockerfile          Nodejs configuration file
│   ├── package.json        npm configuration example
│   └── server.js           js example hello world
├── sock                    uwsgi sock file
└── wwwroot                 Flask workspace
    ├── app                 app directory
    │   └── __init__.py     Python Initialization file
    ├── manage.py
    ├── requirements.txt
    ├── supervisord.conf
    └── uwsgi.ini
```
=======
>>>>>>> upstream/develop

