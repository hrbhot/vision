FROM alpine:3.8

EXPOSE 5000
RUN apk add --no-cache \
    python3 \
    bash \
    python3-dev \
    gcc \
    build-base \
    uwsgi \
    uwsgi-python3 \
    supervisor && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    pip3 install virtualenv && \
    addgroup -S www && \
    adduser -D -S -h /home/www -s /sbin/nologin -G www www \

