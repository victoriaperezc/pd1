### STAGE 1: Build ###
FROM node:15
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install expo cli --silent
COPY . /usr/src/app
RUN expo build:web

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
COPY --from=build /web-build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]