# ビルドステージ
FROM maven:3.9.6-eclipse-temurin-23 AS build
WORKDIR /home/app

COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# 実行ステージ
FROM eclipse-temurin:23-jdk
WORKDIR /usr/local/lib
COPY --from=build /home/app/target/*.jar demo.jar

EXPOSE 8083
ENTRYPOINT ["java", "-jar", "demo.jar"]
