FROM node:latest

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY src/main/ui/package.json ./
COPY src/main/ui/package-lock.json ./

RUN npm install nodemon --save-dev

COPY src/main/ui ./

CMD ["nodemon", "--exec", "npm", "start"]