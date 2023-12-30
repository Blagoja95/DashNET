FROM node:21.0.0-alpine AS builder

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

WORKDIR /usr/src/app

COPY ./src/main/ui/package.json ./src/main/ui/package-lock.json ./

COPY ./src/main/ui/ ./

RUN npm install --include=dev

FROM node:21.0.0-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

CMD npm run start