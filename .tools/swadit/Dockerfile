FROM node:latest as build

WORKDIR /app

RUN apt-get -y update
RUN apt-get -y install git

RUN git clone https://github.com/denis-martin/swadit.git .

RUN npm install
RUN  npm --prefix ./src/assets/swadoc install
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html