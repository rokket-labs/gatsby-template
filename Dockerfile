FROM node:14 as builder
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN ["yarn", "install"]
COPY . .
RUN ["yarn", "build"]

FROM nginx:1.19
EXPOSE 80
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
