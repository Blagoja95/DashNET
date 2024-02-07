FROM eclipse-temurin:17-jdk-alpine

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

COPY ./service/.mvn/ .mvn
COPY ./service/mvnw ./service/mvnw.cmd ./service/pom.xml ./

RUN dos2unix mvnw && chmod +x mvnw

RUN ./mvnw dependency:resolve

COPY ./service/src/main/java ./src/main/java
COPY ./service/src/main/resources ./src/main/resources

CMD ["./mvnw", "spring-boot:run"]