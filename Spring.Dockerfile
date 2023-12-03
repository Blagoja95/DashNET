FROM maven:3.8.4-openjdk-17-slim AS build

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"
WORKDIR /app

COPY pom.xml .
COPY src ./src

FROM openjdk:17-jdk-slim

COPY --from=build app/target ./app/target

RUN apt-get update && apt-get install -y inotify-tools

CMD ["java", "-Dspring.devtools.restart.enabled=true", "-jar", "./target/dashNet-0.0.1-SNAPSHOT.jar"]
