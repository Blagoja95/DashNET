FROM eclipse-temurin:17-jdk-alpine

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

USER root

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./

RUN dos2unix mvnw && chmod +x mvnw

RUN ./mvnw dependency:resolve

COPY src/main/java ./src/main/java
COPY src/main/resources ./src/main/resources

CMD ["./mvnw", "spring-boot:run"]