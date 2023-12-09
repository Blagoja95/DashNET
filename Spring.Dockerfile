FROM eclipse-temurin:17-jdk-jammy

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./

RUN ./mvnw dependency:resolve

COPY src ./src

CMD ["./mvnw", "spring-boot:run"]
