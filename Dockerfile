FROM node:12

# Create app directory
RUN npm install -g http-server

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install expo-cli

RUN npm run build
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "npm", "run", "start" ]
