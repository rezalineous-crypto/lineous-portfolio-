# =========================
# Stage 1: Build
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG NODE_ENV
ENV ENVIRONMENT=$NODE_ENV

RUN if [ "$ENVIRONMENT" = "production" ]; then \
      cp .env.production .env; \
    else \
      cp .env.development .env; \
    fi

RUN npm run build

# =========================
# Stage 2: Nginx Runner
# =========================
FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/index.html /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]