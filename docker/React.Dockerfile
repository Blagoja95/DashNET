FROM node:18-alpine

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

WORKDIR /app

COPY ./app/web/package*.json .

RUN npm install

COPY ./app/web .

CMD npm start