FROM node:18.13.0 AS install

WORKDIR /temp
COPY . /temp
USER root
RUN yarn
RUN yarn build:prod --scope=@wraithlight/auth.node --scope=@wraithlight/auth.ui

FROM node:18.13.0 AS runner
COPY --from=install /temp/apps/auth/dist /usr/src/app

WORKDIR /usr/src/app
CMD node node/index.js
