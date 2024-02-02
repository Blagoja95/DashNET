FROM node:18-alpine

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

WORKDIR /app

COPY ./src/main/ui/package*.json .

RUN npm install

COPY ./src/main/ui .

CMD npm start