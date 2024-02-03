#!/bin/bash

# navigate to app folder
cd /app

# install node and npm
yum -y install curl
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
yum -y install nodejs
yum -y install npm
sudo yum -y install nginx

# Enable and start the Nginx service
sudo systemctl enable nginx
sudo systemctl start nginx

# Allow HTTP traffic in the firewall
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload