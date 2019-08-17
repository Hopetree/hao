FROM node:alpine AS stage
WORKDIR /opt/build
COPY . .
RUN npm config set registry https://registry.npm.taobao.org/ && \
    npm install && \
    npm audit fix && \
    npm run build

FROM nginx:latest
COPY --from=stage /opt/build/dist /usr/share/nginx/html
