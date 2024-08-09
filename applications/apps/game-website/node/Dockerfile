FROM node:18.13.0 AS install

WORKDIR /temp
COPY . /temp
USER root
RUN yarn
RUN yarn build --scope=@wraithlight/game-website.ui --scope=@wraithlight/game-website.node

FROM node:18.13.0 AS runner
COPY --from=install /temp/apps/game-website/dist /usr/src/app

WORKDIR /usr/src/app
CMD node node/index.js
