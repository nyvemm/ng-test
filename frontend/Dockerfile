FROM node:alpine 

RUN apk add --no-cache yarn

WORKDIR /usr/frontend

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5173





