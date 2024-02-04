#!/bin/bash

# navigate to app folder
cd /app

# install dependencies
sudo npm install
sudo npm run build
cp -r build/* /var/www/html
npm install pm2 -g