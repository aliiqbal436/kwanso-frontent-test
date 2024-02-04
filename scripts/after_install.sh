#!/bin/bash

# navigate to app folder
cd /app

# install dependencies
sudo npm install
sudo rm -rf build
sudo npm run build
cp -rf build/* /var/www/html
npm install pm2 -g