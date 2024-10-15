FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
#COPY package-lock.json /app/
COPY public ./public
COPY src ./src
#COPY . .

RUN npm install

RUN npm run build

EXPOSE 4201

CMD [ "npm", "start"]
