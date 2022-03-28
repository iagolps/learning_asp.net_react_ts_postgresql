FROM node:latest

WORKDIR /app/ui

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]