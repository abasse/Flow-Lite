FROM node:20-alpine

WORKDIR /app

# Install build tools for native modules (sqlite3)
RUN apk add --no-cache python3 make g++

COPY package.json ./

RUN npm install --omit=dev

COPY src ./src

# SQLite database lives in a named volume mounted here
RUN mkdir -p /app/database

EXPOSE 5001

CMD ["node", "src/server.js"]
