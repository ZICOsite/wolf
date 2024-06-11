FROM node:20-alpine

# Установка зависимостей
WORKDIR /app
COPY package*.json ./
RUN npm install

# Копирование остальных файлов
COPY . .

# Запуск приложения
EXPOSE 5173
CMD ["npm", "run", "dev"]
