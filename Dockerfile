FROM node:slim AS stage
WORKDIR /opt/build
COPY . .
RUN npm -v && \
    npm config set registry https://registry.npm.taobao.org && \
    npm install -g npm && npm -v && \
    npm install && \
    npm run build

FROM nginx:stable-alpine
COPY --from=stage /opt/build/dist /usr/share/nginx/html
