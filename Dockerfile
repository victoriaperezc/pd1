### STAGE 1: Build ###
FROM node:lts-alpine
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install 
RUN npm install -g expo-cli
COPY . /usr/src/app

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
COPY /usr/src/app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]