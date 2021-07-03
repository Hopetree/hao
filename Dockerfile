FROM node:slim AS stage
WORKDIR /opt/build
COPY . .
RUN npm install && npm run build

FROM nginx:stable-alpine
COPY --from=stage /opt/build/dist /usr/share/nginx/html
