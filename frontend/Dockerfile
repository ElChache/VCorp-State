FROM node:18-alpine

WORKDIR /app

# Install Java for shadow-cljs
RUN apk add --no-cache openjdk11

# Copy package files
COPY package.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npx shadow-cljs release app

# Serve the built files
EXPOSE 3000
CMD ["npx", "http-server", "public", "-p", "3000"]