# FROM nginx

# EXPOSE 8080

# RUN apt-get update \
#   && apt-get install -y build-essential libpng-dev \
#   && apt-get install -y curl \
#   && curl -sL https://deb.nodesource.com/setup_11.x | bash - \
#   && apt-get install -y nodejs \
#   && apt-get install -y cowsay \
#   && ln -s /usr/games/cowsay /usr/bin/cowsay

# WORKDIR /usr/app

# COPY . ./

# RUN npm install 

# RUN npm run build -- --output-path=./build

# CMD cowsay "Hello world!" \
#   && nginx -g 'daemon off;'
#   && npm start

FROM node:slim

EXPOSE 8000

WORKDIR /usr/app

COPY . ./

RUN npm install && npm install -g @angular/cli

RUN npm run build -- --output-path=./build

WORKDIR /usr/app/build

CMD ng serve --port 8000