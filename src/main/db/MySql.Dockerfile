FROM mysql:latest

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

COPY ./src/main/db/script /docker-entrypoint-initdb.d/
