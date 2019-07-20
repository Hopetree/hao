FROM nginx:latest
ARG from_dir=dist
ARG to_dir=/usr/share/nginx/html

COPY ${from_dir} ${to_dir}