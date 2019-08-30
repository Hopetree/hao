FROM node:latest AS stage
WORKDIR /opt/build
COPY . .
RUN npm install --registry=https://registry.npm.taobao.org && \
    npm run build

FROM nginx:latest
COPY --from=stage /opt/build/dist /usr/share/nginx/html
