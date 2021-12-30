# build environment
FROM node:16.13.1-alpine3.14 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.0.1 -g
COPY . /app
ARG API_HOST
ARG API_PORT
ENV REACT_APP_API_HOST=${API_HOST}
ENV REACT_APP_API_PORT=${API_PORT}
RUN npm run build

# production environment
FROM nginx:1.21.5-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
