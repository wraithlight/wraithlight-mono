ARG SRC_NAME=communications-ess

FROM node:18.13.0 AS builder
ARG SRC_NAME
WORKDIR /temp/${SRC_NAME}

COPY .build/ /temp/.build/
COPY ${SRC_NAME}/ /temp/${SRC_NAME}/

USER root
RUN bash /temp/${SRC_NAME}/build.sh

FROM mysql:8.0.32 AS runner
ARG SRC_NAME
WORKDIR /usr/src/app

COPY --from=builder /temp/${SRC_NAME}/dist/*.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
