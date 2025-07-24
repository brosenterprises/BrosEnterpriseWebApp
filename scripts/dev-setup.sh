#!/bin/bash

echo "🛠️  Bros Enterprise Web App - Development Setup"
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "📦 Installing dependencies..."

# Install root dependencies
echo "Installing root dependencies..."
npm install

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend && npm install && cd ..

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend && npm install && cd ..

# Create environment files
echo "🔧 Setting up environment files..."

# Backend environment
if [ ! -f "backend/.env" ]; then
    cp backend/.env.example backend/.env
    echo "✅ Created backend/.env from example"
else
    echo "⚠️  backend/.env already exists"
fi

# Frontend environment
if [ ! -f "frontend/.env" ]; then
    cat > frontend/.env << EOF
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Bros Enterprise Web App
VITE_APP_VERSION=1.0.0
EOF
    echo "✅ Created frontend/.env"
else
    echo "⚠️  frontend/.env already exists"
fi

echo ""
echo "🎉 Setup complete! You can now:"
echo ""
echo "1. Start development servers:"
echo "   npm run dev"
echo ""
echo "2. Or start them individually:"
echo "   npm run dev:frontend  # Starts React app on http://localhost:3000"
echo "   npm run dev:backend   # Starts Node.js API on http://localhost:5000"
echo ""
echo "3. Run tests:"
echo "   npm run test"
echo ""
echo "4. Build for production:"
echo "   npm run build"
echo ""
echo "5. Start with Docker:"
echo "   docker-compose up -d"
echo ""
echo "📚 Check the README.md for more detailed instructions!"
