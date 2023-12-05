FROM node:latest

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY src/main/ui/package.json ./
COPY src/main/ui/package-lock.json ./

COPY src/main/ui ./

RUN npm install nodemon --save-dev

CMD ["nodemon", "--exec", "npm", "start"]