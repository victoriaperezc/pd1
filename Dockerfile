# pull official base image
FROM node:15
EXPOSE 19006
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /app/node_modules/.bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install expo-cli -g --silent

# add app
COPY . ./

# start app
ENTRYPOINT ["npm", "run"]
CMD ["web"]