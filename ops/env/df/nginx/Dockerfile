# 8 MB
FROM nginx:alpine

RUN addgroup -S www \
    && adduser -D -S -h /home/www -s /sbin/nologin -G www www \
    && echo "daemon off;" >> /etc/nginx/nginx.conf \
    && sed -i 's/user  nginx;/user  www;/' /etc/nginx/nginx.conf
