FROM node:21.0.0-alpine

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

WORKDIR /usr/src/app

RUN --mount=type=bind,source=./src/main/ui/package.json,target=package.json \
    --mount=type=bind,source=./src/main/ui/package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev \

USER node

COPY ./src/main/ui/ .

CMD npm run start