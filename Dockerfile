FROM node:20.17.0

WORKDIR /app/frontend


COPY frontend/package*.json ./

RUN npm install

COPY frontend /app/frontend/

WORKDIR /app/frontend

EXPOSE 3000
CMD ["npm", "start"]