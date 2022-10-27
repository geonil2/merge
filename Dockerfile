FROM node:16-alpine
LABEL maintainer="geonil2@gmail.com"
WORKDIR /usr/src/app
EXPOSE 3000
COPY ./ ./
RUN npm install --force && npm run build
CMD npm run start
