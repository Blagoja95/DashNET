FROM eclipse-temurin:17-jdk-alpine

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./

RUN ./mvnw dependency:resolve

COPY src/main/java ./src
COPY src/main/resources ./src

CMD ["./mvnw", "spring-boot:run"]