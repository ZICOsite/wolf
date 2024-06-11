# Используем официальный образ Node.js
FROM node:20-alpine

# Установка зависимостей
WORKDIR /app
COPY package*.json ./
RUN npm install

# Копирование остальных файлов проекта
COPY . .

# Установка нужного порта
EXPOSE 5173

# Команда для запуска приложения
CMD ["npm", "run", "dev"]
