FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /app/node_api

COPY . .

RUN npm install

EXPOSE 3600

CMD ["npm", "run", "start"]