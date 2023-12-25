FROM eclipse-temurin:17-jdk-alpine as build

LABEL maintainer="Boris Blagojević <boris.blagojevicc@hotmail.com>"

WORKDIR /workspace/app

COPY .mvn .mvn
COPY mvnw .
COPY pom.xml .

COPY src src

RUN dos2unix mvnw && chmod +x mvnw

RUN ./mvnw install -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

FROM eclipse-temurin:17-jdk-alpine

VOLUME /tmp

ARG DEPENDENCY=/workspace/app/target/dependency
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app

ENTRYPOINT ["java","-cp","app:app/lib/*","dashnet.dashNet.DashNetApplication"]

#DOCKER_DEFAULT_PLATFORM=linux/amd64 docker compose --profile spring-mysql  up -d --build