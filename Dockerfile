# Базовий образ
FROM node:22-slim AS base
WORKDIR /app

# Етап збірки (Build Stage)
FROM base AS build

# Встановлюємо пакети, необхідні для збірки (це було у вас)
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Копіюємо файли для встановлення залежностей
COPY package-lock.json package.json ./
COPY scripts ./scripts
# Встановлюємо devDependencies (потрібні для webpack)
RUN npm ci

# Копіюємо решту коду
COPY . .

# СТВОРЕННЯ PRODUCTION ЗБІРКИ
RUN npm run build

# ----------------------------------------------------
# ФІНАЛЬНИЙ ЕТАП (Final Stage) - Легкий образ для роботи
FROM base AS final

# Встановлюємо лише production-залежності, необхідні для запуску сервера
# Це може бути необхідно, якщо для 'start' потрібні якісь 'dependencies'
# Ви можете пропустити цей крок, якщо ваш сервер не має залежностей
# RUN npm ci --production

# Копіюємо ТІЛЬКИ СКОМПІЛЬОВАНИЙ ДОДАТОК (наприклад, збірку Webpack)
# ПРИКЛАД: якщо збірка в папці 'dist'
COPY --from=build /app/dist /usr/share/nginx/html
# ************
# УВАГА: Оскільки це Node.js, вам потрібен Node.js сервер, а не NGINX.
# Натомість, ми копіюємо весь код збірки назад, але збираємо його інакше.
# ************

# СТАНДАРТНИЙ ПІДХІД ДЛЯ NODE.JS (якщо ви використовуєте Express/Koa для обслуговування збірки):
# 1. Створюємо фінальний образ з Node.js
FROM node:22-slim

WORKDIR /app
# Копіюємо лише те, що потрібно для запуску сервера (залежності та скомпільований код)
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/package-lock.json ./package-lock.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./dist
COPY --from=build /app/server.js ./server.js

# Запускаємо Node.js сервер, який обслуговує статичні файли збірки
EXPOSE 3000
CMD [ "npm", "run", "start" ]