FROM node:12

WORKDIR /app
COPY . /app

RUN npm install -g @angular/cli
