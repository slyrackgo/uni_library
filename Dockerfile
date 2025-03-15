FROM amazoncorretto:17-alpine-jdk
LABEL maintainer="Atai"
COPY target/uni_library-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
EXPOSE 8080
