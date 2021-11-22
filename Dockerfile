FROM node:lts-alpine

# install simple http server for serving static content


# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN yarn

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

RUN npm install -g http-server
# build app for production with minification

EXPOSE 8080
CMD [ "http-server", "build" ]