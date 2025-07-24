#!/bin/bash

# CI Build script for GitHub Actions
set -e

echo "🚀 Starting CI build process..."

# Clean any existing installations
echo "🧹 Cleaning workspace..."
rm -rf node_modules frontend/node_modules
rm -f package-lock.json frontend/package-lock.json

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install --legacy-peer-deps

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install --legacy-peer-deps

# Verify critical dependencies
echo "🔍 Verifying installations..."
if [ ! -f "node_modules/.bin/vite" ]; then
    echo "⚠️ Vite not found in .bin, installing explicitly..."
    npm install vite@^5.0.0 --save-dev --legacy-peer-deps
fi

if [ ! -f "node_modules/.bin/tsc" ]; then
    echo "⚠️ TypeScript not found, installing explicitly..."
    npm install typescript@^5.2.2 --save-dev --legacy-peer-deps
fi

# Show what we have
echo "📋 Installed tools:"
ls -la node_modules/.bin/ | grep -E "(vite|tsc)" || echo "Tools not found in .bin"

# Build the project
echo "🏗️ Building frontend..."
npx vite build

# Verify build output
if [ -d "dist" ] && [ -f "dist/index.html" ]; then
    echo "✅ Build successful!"
    echo "📁 Build contents:"
    ls -la dist/
else
    echo "❌ Build failed - no output found"
    exit 1
fi

echo "🎉 CI build completed successfully!"
