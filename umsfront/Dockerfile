FROM node:22-alpine3.18 AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build



# Serve Application using Nginx Server
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/umsfront/browser/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]