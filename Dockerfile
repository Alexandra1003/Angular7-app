FROM ubuntu:latest

WORKDIR /app

USER root

RUN apt-get update
RUN apt-get install -y nginx nodejs
RUN apt-get install -y cowsay
RUN ln -s /usr/games/cowsay /usr/bin/cowsay

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy a configuration file from the current directory
ADD nginx.conf /etc/nginx/

ADD src /usr/share/nginx/html/
ADD src /var/www/html/

# Append "daemon off;" to the beginning of the configuration
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Expose ports
EXPOSE 90





# Set the default command to execute
# when creating a new container
CMD service nginx start
RUN cowsay "Everything is ready, my lord!"


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

# FROM node:slim

# EXPOSE 8000

# WORKDIR /usr/app

# COPY . ./

# RUN npm install && npm install -g @angular/cli

# RUN npm run build -- --output-path=./build

# WORKDIR /usr/app/build

# CMD ng serve --port 8000 --host 0.0.0.0