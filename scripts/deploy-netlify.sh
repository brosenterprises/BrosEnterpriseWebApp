#!/bin/bash

# 🌐 Netlify Deployment Script for Bros Enterprises
# This script handles local deployment to Netlify

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Configuration
PROJECT_DIR="/Users/talusaws/Desktop/Personal Projects/BrosEnterpriseWebApp"
FRONTEND_DIR="$PROJECT_DIR/frontend"
BUILD_DIR="$FRONTEND_DIR/dist"
NETLIFY_SITE_NAME="brosenterprises"

echo -e "${BLUE}🌐 Bros Enterprises - Netlify Deployment${NC}"
echo -e "${BLUE}=======================================${NC}"
echo ""

# Function to print section headers
print_section() {
    echo -e "${YELLOW}$1${NC}"
    echo -e "${YELLOW}$(printf '=%.0s' $(seq 1 ${#1}))${NC}"
}

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
print_section "📋 Checking Prerequisites"

if ! command_exists node; then
    echo -e "${RED}❌ Node.js is not installed${NC}"
    exit 1
fi

if ! command_exists npm; then
    echo -e "${RED}❌ npm is not installed${NC}"
    exit 1
fi

if ! command_exists netlify; then
    echo -e "${YELLOW}⚠️  Netlify CLI not found. Installing...${NC}"
    npm install -g netlify-cli
fi

echo -e "${GREEN}✅ Node.js version: $(node --version)${NC}"
echo -e "${GREEN}✅ npm version: $(npm --version)${NC}"
echo -e "${GREEN}✅ Netlify CLI version: $(netlify --version)${NC}"
echo ""

# Navigate to project directory
cd "$PROJECT_DIR"

# Install dependencies
print_section "📦 Installing Dependencies"

if [ ! -d "node_modules" ]; then
    echo "Installing root dependencies..."
    npm install
fi

cd "$FRONTEND_DIR"

if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
fi

echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

# Build the project
print_section "🏗️ Building Project"

echo "Building frontend for production..."
npm run build

if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}❌ Build failed - dist directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully${NC}"

# Build analysis
echo ""
print_section "📊 Build Analysis"

echo "Build directory size:"
du -sh "$BUILD_DIR"
echo ""

echo "File breakdown:"
find "$BUILD_DIR" -type f -name "*.js" -exec du -h {} + | sort -hr | head -10
echo ""

echo "CSS files:"
find "$BUILD_DIR" -type f -name "*.css" -exec du -h {} +
echo ""

# Netlify deployment
print_section "🌐 Deploying to Netlify"

# Check if user is logged in to Netlify
if ! netlify status > /dev/null 2>&1; then
    echo -e "${YELLOW}🔑 Please log in to Netlify...${NC}"
    netlify login
fi

echo "Current Netlify status:"
netlify status

echo ""
echo -e "${BLUE}🚀 Starting deployment...${NC}"

# Deploy to Netlify
if netlify deploy --prod --dir="$BUILD_DIR" --message="Production deployment from local script"; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    
    # Get site info
    SITE_URL=$(netlify status --json | grep -o '"url":"[^"]*' | cut -d'"' -f4)
    
    echo ""
    print_section "🎉 Deployment Complete"
    
    echo -e "${GREEN}🌐 Your site is live at: ${SITE_URL}${NC}"
    echo -e "${BLUE}📊 Netlify Dashboard: https://app.netlify.com${NC}"
    echo ""
    
    echo -e "${PURPLE}🔗 Quick Links:${NC}"
    echo -e "   • Home: ${SITE_URL}"
    echo -e "   • Paints: ${SITE_URL}/paints"
    echo -e "   • Hardware: ${SITE_URL}/hardware"
    echo -e "   • Contact: ${SITE_URL}/contact"
    echo ""
    
    # Open site in browser (optional)
    read -p "🌐 Open site in browser? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        if command_exists open; then
            open "$SITE_URL"
        elif command_exists xdg-open; then
            xdg-open "$SITE_URL"
        else
            echo "Please open $SITE_URL in your browser"
        fi
    fi
    
else
    echo -e "${RED}❌ Deployment failed${NC}"
    exit 1
fi

# Performance check
print_section "🚀 Performance Check"

echo "Running basic performance check..."
if command_exists curl; then
    RESPONSE_TIME=$(curl -o /dev/null -s -w '%{time_total}' "$SITE_URL")
    echo -e "${GREEN}⚡ Site response time: ${RESPONSE_TIME}s${NC}"
    
    if (( $(echo "$RESPONSE_TIME < 2.0" | bc -l) )); then
        echo -e "${GREEN}✅ Good response time!${NC}"
    else
        echo -e "${YELLOW}⚠️  Response time could be improved${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  curl not available for performance check${NC}"
fi

echo ""
print_section "📱 Mobile Testing Instructions"

echo -e "${BLUE}Test your mobile-responsive site:${NC}"
echo "1. Open the site on your mobile device"
echo "2. Test different screen orientations"
echo "3. Check touch interactions and navigation"
echo "4. Verify all features work on mobile"
echo ""

echo -e "${BLUE}Performance testing:${NC}"
echo "1. Use Google PageSpeed Insights: https://pagespeed.web.dev/"
echo "2. Test with Lighthouse in Chrome DevTools"
echo "3. Check mobile usability in Google Search Console"
echo ""

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${BLUE}Your Bros Enterprises website is now live and mobile-ready!${NC}"
