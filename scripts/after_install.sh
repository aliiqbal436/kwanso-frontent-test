#!/bin/bash

set -e

# Deploy the React app to the target directory
sudo cp -R * /var/www/html/react-app/

# Start the Nginx service
sudo service nginx start
