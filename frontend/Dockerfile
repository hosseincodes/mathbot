# Dockerfile for frontend

# Build stage
FROM node:20 AS build

# Set working directory
WORKDIR /frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the built React app to Nginx's default static directory
COPY --from=build /frontend/build /usr/share/nginx/html

# Copy a custom Nginx configuration file (optional)
# Uncomment the following line if you have a custom nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3000
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]