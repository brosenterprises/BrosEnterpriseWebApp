#!/bin/bash

# Build script for Netlify deployment
set -e

echo "🚀 Starting Bros Enterprises build process..."

# Remove any existing node_modules to ensure clean install
echo "🧹 Cleaning up..."
rm -rf node_modules frontend/node_modules

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install --production=false

# Install frontend dependencies directly
echo "📦 Installing frontend dependencies..."
cd frontend
npm install --production=false

# Build frontend
echo "🏗️ Building frontend..."
npm run build

echo "✅ Build completed successfully!"
echo "📁 Build output in: frontend/dist"

# Verify build output exists
if [ -d "dist" ] && [ -f "dist/index.html" ]; then
    echo "✅ Build verification passed!"
    echo "📋 Build contents:"
    ls -la dist/
else
    echo "❌ Build verification failed!"
    exit 1
fi
