# ============================
# 1️⃣ Build Stage
# ============================
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ============================
# 2️⃣ Production Stage
# ============================
FROM node:20-alpine

WORKDIR /app

# Copy only built artifacts and minimal dependencies
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./compiled

EXPOSE 3000

CMD ["node", "compiled/src/main.js"]
