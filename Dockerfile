FROM ubuntu:16.04

RUN apt-get update && \
  apt-get install -y  curl && \
  curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
  apt-get install -y nodejs

COPY ./app /home/
WORKDIR /home

RUN npm install && npm install -g expo-cli
EXPOSE 8080
CMD [ "npm", "start" ]
