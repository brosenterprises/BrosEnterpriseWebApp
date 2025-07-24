#!/bin/bash

# Build script for Netlify deployment
set -e

echo "🚀 Starting Bros Enterprises build process..."

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install

# Build frontend
echo "🏗️ Building frontend..."
npm run build

echo "✅ Build completed successfully!"
echo "📁 Build output in: frontend/dist"

# List build contents
echo "📋 Build contents:"
ls -la dist/
