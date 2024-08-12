FROM node:18.13.0 AS install

WORKDIR /temp
COPY . /temp
USER root
RUN yarn
RUN yarn build --scope=@wraithlight/auth.ui
CMD echo szia
# FROM node:18.13.0 AS runner
# COPY --from=install /temp /usr/src/app

# WORKDIR /usr/src/app
# CMD node node/index.js
