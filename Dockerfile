FROM node:18-alpine

WORKDIR /upbox/

COPY package.json /upbox/
COPY package-lock.json /upbox/
COPY public /upbox/public/
COPY src /upbox/src/

WORKDIR /upbox

RUN npm install

RUN npm run build

EXPOSE 4201

CMD [ "npm", 'start' ]
