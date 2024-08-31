FROM node:20.17.0

WORKDIR /frontend

COPY frontend/package*.json ./

RUN npm install


# WORKDIR /backend

# COPY backend/package*.json ./

# RUN npm install



# COPY backend /app/backend
COPY frontend /app/frontend


WORKDIR /app/frontend

EXPOSE 3000

CMD ["npm", "start"]