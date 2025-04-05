# Use OpenJDK base image
FROM openjdk:17-jdk-slim
VOLUME /tmp
ARG JAR_FILE=target/eventzen-backend-0.0.1-SNAPSHOT.jar  # Update this line with your actual .jar file name
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
