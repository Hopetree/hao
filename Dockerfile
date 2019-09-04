FROM node:slim AS stage
WORKDIR /opt/build
COPY . .
RUN npm config set registry https://registry.npm.taobao.org && \
    npm cache clean --force && npm cache verify && \
    npm install && \
    npm run build

FROM nginx:stable-alpine
COPY --from=stage /opt/build/dist /usr/share/nginx/html
