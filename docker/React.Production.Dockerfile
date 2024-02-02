# build environment
FROM node:18-alpine as build

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

WORKDIR /app

COPY ./src/main/ui/package*.json .

RUN npm install

COPY ./src/main/ui ./

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]