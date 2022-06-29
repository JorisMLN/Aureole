FROM node:12.22.12-alpine
COPY . /app
WORKDIR /app
RUN echo nameserver 1.1.1.1 > resolv.conf && \
  apk add --no-cache git &&\
  npm install -g npm@6.14.13 &&\
  npm install &&\
  npm run build

FROM nginx:1.22.0-alpine
COPY --from=0 /app/build /usr/share/nginx/html