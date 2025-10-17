# Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy project files and build
COPY . .
RUN npm run build

# Production stage with nginx
FROM nginx:alpine AS runtime

# Copy built static files
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: Create a custom nginx config for better routing
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ $uri.html /404.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]