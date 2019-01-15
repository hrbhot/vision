FROM alpine:3.8

EXPOSE 5000
WORKDIR /app
COPY  ./backend/requirements.txt /app

RUN set -e && \
        apk add --no-cache --virtual build-apk\
            python3 \
            bash \
            python3-dev \
            gcc \
            build-base \
            uwsgi \
            uwsgi-python3 \
            supervisor \
        && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    pip3 install virtualenv && \
    pip install -r /app/requirements.txt && \
    virtualenv venv && \
    addgroup -S www && \
    adduser -D -S -h /home/www -s /sbin/nologin -G www www \
