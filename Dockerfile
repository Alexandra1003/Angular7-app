FROM ubuntu:latest

WORKDIR /app

USER root

RUN apt-get update
RUN apt-get install -y nginx \
  && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_11.x | bash - \
  && apt-get install -y nodejs
RUN apt-get install -y cowsay
RUN ln -s /usr/games/cowsay /usr/bin/cowsay

COPY nginx.conf /etc/nginx/conf.d

COPY . .
RUN npm install
RUN npm run build -- --output-path=./build

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

EXPOSE 90

CMD cowsay "Everything is ready, my lord!" \
    && service nginx start
