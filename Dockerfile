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

RUN echo "========================"
RUN echo "ENVIRONMENT=$ENVIRONMENT"

RUN if [ "$ENVIRONMENT" = "production" ]; then \
      echo "Using production env"; \
      cp .env.production .env; \
    else \
      echo "Using development env"; \
      cp .env.development .env; \
    fi

RUN echo "Contents of .env:"
RUN cat .env || echo "File missing!"

RUN echo "Starting Vite build..."
RUN npm run build

# =========================
# Stage 2: Runner
# =========================
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/index.html ./
COPY --from=builder /app/public ./public

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]