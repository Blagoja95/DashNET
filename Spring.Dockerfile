FROM eclipse-temurin:17-jdk-alpine

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

COPY .mvn/ .mvn
COPY mvnw mvnw.cmd pom.xml ./

RUN dos2unix mvnw && chmod +x mvnw

RUN ./mvnw dependency:resolve

COPY src/main/java ./src/main/java
COPY src/main/resources ./src/main/resources

CMD ["./mvnw", "spring-boot:run"]