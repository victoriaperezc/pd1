FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server
RUN npm install expo-cli

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN yarn

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

EXPOSE 8080
CMD [ "http-server", "build" ]
