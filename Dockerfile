FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
#COPY package-lock.json /upbox/
#COPY public /upbox/public/
#COPY src /upbox/src/

#WORKDIR /upbox

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start"]
