FROM node:18.13.0 AS install

WORKDIR /temp
COPY . /temp
USER root
RUN yarn
RUN yarn wl:postinstall
RUN yarn build:prod --scope=@wraithlight/um.node --scope=@wraithlight/um.ui

FROM node:18.13.0 AS runner
COPY --from=install /temp/apps/user-management/dist /usr/src/app

WORKDIR /usr/src/app
CMD node node/index.js
