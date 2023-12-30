FROM mysql:latest

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

COPY ./src/main/db /docker-entrypoint-initdb.d/
