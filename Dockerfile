### STAGE 1: Build ###
FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
COPY . /usr/src/app

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
COPY . /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]