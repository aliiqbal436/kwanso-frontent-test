#!/bin/bash

# navigate to app folder
cd /app

# install node and npm
apt-get install curl
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt-get install nodejs -y
apt-get install npm -y
sudo apt install nginx -y
sudo ufw allow 'Nginx HTTP'
sudo ufw enable