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
Nginx 	port 9001
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


```
