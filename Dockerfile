FROM node:15
                                                  
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 
RUN npm start

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start" ]
