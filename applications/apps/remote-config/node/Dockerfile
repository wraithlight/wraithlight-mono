FROM node:18.13.0 AS install

WORKDIR /temp
COPY . /temp
USER root
RUN yarn
RUN yarn build --scope=@wraithlight/remote-config.node

FROM node:18.13.0 AS runner
COPY --from=install /temp/apps/remote-config/dist /usr/src/app

WORKDIR /usr/src/app
CMD node node/index.js
