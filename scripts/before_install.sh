#!/bin/bash

# navigate to app folder
cd /app

# install node and npm
yum -y install curl
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
yum -y install nodejs
yum -y install npm
yum -y install nginx
ufw allow 'Nginx HTTP'