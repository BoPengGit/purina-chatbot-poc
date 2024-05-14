# Stage 1: Build the React application
FROM node:16 as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2: Serve the build with Nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
EXPOSE 8080
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
