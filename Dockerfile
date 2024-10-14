FROM node:18-alphine

WORKDIR /upbox/

COPY package.json /upbox/
COPY package-lock.json /upbox/
COPY public /upbox/
COPY src/ /upbox/

WORKDIR /upbox

RUN npm install

RUN npm run build

EXPOSE 4201

CMD [ "npm", 'start' ]
