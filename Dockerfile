FROM node:16

# set our node environment, either development or production
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
EXPOSE 19006

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest
RUN npm install -g typescript

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /usr/src/app && chown node:node /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
USER root
COPY ./ /usr/src/app/
COPY package.json /usr/src/app/
RUN npm install
RUN npm install --save-dev typescript@~4.3.5
RUN npm install expo-cli expo
#COPY .. /usr/src/app/

# copy in our source code last, as it changes the most
#WORKDIR /usr/src/app
# for development, we bind mount volumes; comment out for production
# COPY ./react_native_app .

ENTRYPOINT ["npm", "run"]
CMD ["web"]