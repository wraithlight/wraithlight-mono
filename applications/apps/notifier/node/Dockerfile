FROM node:18.13.0 AS install

WORKDIR /temp
COPY . /temp
USER root
RUN yarn
RUN yarn build:prod --scope=@wraithlight/notifier.node

FROM node:18.13.0 AS runner
COPY --from=install /temp/apps/notifier/dist /usr/src/app

WORKDIR /usr/src/app
CMD node node/index.js
