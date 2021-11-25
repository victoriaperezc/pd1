# pull base image
FROM node:14.13.1-buster-slim

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
EXPOSE 19006

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /usr/src/app && chown node:node /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
USER node
COPY package.json /usr/src/app/
COPY App.tsx /usr/src/app/
RUN npm install
RUN npm install expo-cli expo

# copy in our source code last, as it changes the most
#WORKDIR /usr/src/app
# for development, we bind mount volumes; comment out for production
# COPY ./react_native_app .

ENTRYPOINT ["npm", "run"]
CMD ["web"]