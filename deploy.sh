#!/bin/bash

# Exit on any error
set -e

echo "Starting deployment for Yellow Pipes Engineering..."

# 1. Pull latest code
echo "Pulling latest code from GitHub..."
git pull origin main

# 2. Install Backend Dependencies
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

# 3. Install Frontend Dependencies and Build
echo "Building frontend..."
cd frontend
npm install
npm run build
cd ..

# 4. Restart Backend with PM2
echo "Restarting backend..."
pm2 startOrRestart ecosystem.config.js --env production

# 5. Restart Nginx (requires sudo, so it will prompt if not run as root)
echo "Restarting Nginx..."
sudo systemctl restart nginx

echo "Deployment successful!"
