FROM node:current-slim

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 80

CMD [ "node", "server.js" ]
