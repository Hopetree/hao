FROM node:lts AS stage
WORKDIR /opt/build

# 定义 NPM_REGISTRY 构建参数
ARG NPM_REGISTRY
# 如果传入了 NPM_REGISTRY 参数，则设置 npm 源
RUN if [ ! -z "$NPM_REGISTRY" ]; then \
    npm config set registry $NPM_REGISTRY; \
    fi

COPY . .
RUN npm install && npm run build

FROM nginx:stable-alpine
COPY --from=stage /opt/build/dist /usr/share/nginx/html
