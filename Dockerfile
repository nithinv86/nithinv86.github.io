# FROM node:18.19.1-alpine3.19
# WORKDIR /usr/src/app
# COPY . /usr/src/app
# RUN npm install -g @angular/cli
# RUN ng analytics off
# RUN npm install
# CMD ["ng", "serve", "-c", "production", "--host", "0.0.0.0"]

FROM node:18.19.1-alpine3.19 AS build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
