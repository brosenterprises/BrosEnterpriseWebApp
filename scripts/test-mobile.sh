#!/bin/bash

# Mobile Responsiveness Testing Script for Bros Enterprises Web App
# This script helps test mobile responsiveness across different devices and scenarios

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_DIR="/Users/talusaws/Desktop/Personal Projects/BrosEnterpriseWebApp"
FRONTEND_DIR="$PROJECT_DIR/frontend"
PORT=3000
MOBILE_TEST_URL="http://localhost:$PORT"

echo -e "${BLUE}🏗️  Bros Enterprises - Mobile Responsiveness Testing${NC}"
echo -e "${BLUE}=================================================${NC}"
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

# Function to check if port is available
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null ; then
        return 0
    else
        return 1
    fi
}

# Function to wait for server to be ready
wait_for_server() {
    echo "⏳ Waiting for development server to be ready..."
    local max_attempts=30
    local attempt=1
    
    while [ $attempt -le $max_attempts ]; do
        if curl -s "$MOBILE_TEST_URL" > /dev/null 2>&1; then
            echo -e "${GREEN}✅ Server is ready!${NC}"
            return 0
        fi
        echo "   Attempt $attempt/$max_attempts - Server not ready yet..."
        sleep 2
        ((attempt++))
    done
    
    echo -e "${RED}❌ Server failed to start within expected time${NC}"
    return 1
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

if [ ! -d "$PROJECT_DIR" ]; then
    echo -e "${RED}❌ Project directory not found: $PROJECT_DIR${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js version: $(node --version)${NC}"
echo -e "${GREEN}✅ npm version: $(npm --version)${NC}"
echo -e "${GREEN}✅ Project directory exists${NC}"
echo ""

# Navigate to project directory
cd "$PROJECT_DIR"

# Install dependencies if needed
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
print_section "🔨 Building Project"

echo "Building frontend..."
npm run build

echo -e "${GREEN}✅ Project built successfully${NC}"
echo ""

# Start development server
print_section "🚀 Starting Development Server"

if check_port $PORT; then
    echo -e "${YELLOW}⚠️  Port $PORT is already in use${NC}"
    echo "Please stop the existing server or use a different port"
    
    # Try to find the process using the port
    PID=$(lsof -ti:$PORT)
    if [ ! -z "$PID" ]; then
        echo "Process using port $PORT: $PID"
        echo "You can kill it with: kill -9 $PID"
    fi
else
    echo "Starting development server on port $PORT..."
    npm run dev &
    SERVER_PID=$!
    
    # Wait for server to be ready
    if wait_for_server; then
        echo -e "${GREEN}✅ Development server started successfully${NC}"
    else
        echo -e "${RED}❌ Failed to start development server${NC}"
        kill $SERVER_PID 2>/dev/null || true
        exit 1
    fi
fi

echo ""

# Mobile testing instructions
print_section "📱 Mobile Testing Instructions"

echo -e "${BLUE}1. Browser DevTools Testing:${NC}"
echo "   • Open $MOBILE_TEST_URL in Chrome/Firefox"
echo "   • Press F12 to open DevTools"
echo "   • Click the device toggle button (📱 icon)"
echo "   • Test these device presets:"
echo "     - iPhone SE (375x667)"
echo "     - iPhone 12 Pro (390x844)"
echo "     - iPad (768x1024)"
echo "     - Samsung Galaxy S20 Ultra (412x915)"
echo ""

echo -e "${BLUE}2. Responsive Breakpoints to Test:${NC}"
echo "   • Mobile: 320px - 767px"
echo "   • Tablet: 768px - 1023px"
echo "   • Desktop: 1024px+"
echo ""

echo -e "${BLUE}3. Key Features to Verify:${NC}"
echo "   ✓ Navigation drawer works on mobile"
echo "   ✓ Bottom navigation appears on mobile"
echo "   ✓ Speed dial FAB for quick actions"
echo "   ✓ Touch-friendly button sizes (44px minimum)"
echo "   ✓ Readable text on small screens"
echo "   ✓ Proper spacing and layout"
echo "   ✓ Images scale correctly"
echo "   ✓ Forms are usable on mobile"
echo "   ✓ Cards adapt to screen size"
echo "   ✓ Grid layout responds properly"
echo ""

echo -e "${BLUE}4. Performance Testing:${NC}"
echo "   • Test on slow 3G network simulation"
echo "   • Check Core Web Vitals in DevTools"
echo "   • Verify smooth scrolling and animations"
echo "   • Test touch interactions and gestures"
echo ""

echo -e "${BLUE}5. Real Device Testing:${NC}"
echo "   • Connect your mobile device to same network"
echo "   • Find your computer's IP address:"
echo "     - macOS: ifconfig | grep 'inet ' | grep -v 127.0.0.1"
echo "     - Windows: ipconfig | findstr IPv4"
echo "   • Access http://[YOUR_IP]:$PORT on mobile device"
echo ""

# Lighthouse mobile testing
print_section "🔍 Lighthouse Mobile Testing"

if command_exists lighthouse; then
    echo "Running Lighthouse mobile audit..."
    lighthouse "$MOBILE_TEST_URL" \
        --only-categories=performance,accessibility,best-practices,seo \
        --form-factor=mobile \
        --throttling-method=simulate \
        --output=html \
        --output-path="./lighthouse-mobile-report.html" \
        --quiet
    
    echo -e "${GREEN}✅ Lighthouse mobile report generated: lighthouse-mobile-report.html${NC}"
else
    echo -e "${YELLOW}⚠️  Lighthouse not installed. Install with: npm install -g lighthouse${NC}"
fi

echo ""

# Testing checklist
print_section "✅ Mobile Testing Checklist"

cat << 'EOF'
□ Navigation & Layout
  □ Hamburger menu opens/closes properly
  □ Bottom navigation works on mobile
  □ Sidebar collapses on mobile
  □ Header adapts to mobile size
  □ Footer is mobile-friendly

□ Content & Typography
  □ Text is readable without zooming
  □ Headings scale appropriately
  □ Line height is comfortable
  □ Content doesn't overflow horizontally

□ Interactive Elements
  □ Buttons are at least 44px touch targets
  □ Links are easy to tap
  □ Form inputs are large enough
  □ Dropdowns work on touch devices

□ Images & Media
  □ Images scale properly
  □ No horizontal scrolling
  □ Icons are clear at small sizes
  □ Videos are responsive

□ Performance
  □ Page loads quickly on mobile
  □ Smooth scrolling and animations
  □ No layout shifts during loading
  □ Touch interactions are responsive

□ Cross-Browser Testing
  □ Safari on iOS
  □ Chrome on Android
  □ Samsung Internet
  □ Firefox Mobile

□ Accessibility
  □ Screen reader compatibility
  □ High contrast mode support
  □ Keyboard navigation works
  □ Focus indicators are visible
EOF

echo ""

# Cleanup function
cleanup() {
    echo ""
    print_section "🧹 Cleanup"
    
    if [ ! -z "$SERVER_PID" ]; then
        echo "Stopping development server..."
        kill $SERVER_PID 2>/dev/null || true
        echo -e "${GREEN}✅ Development server stopped${NC}"
    fi
}

# Set up cleanup on script exit
trap cleanup EXIT

echo -e "${GREEN}🎉 Mobile testing environment is ready!${NC}"
echo -e "${BLUE}📱 Open $MOBILE_TEST_URL in your browser and start testing${NC}"
echo ""
echo "Press Ctrl+C to stop the server and exit"

# Keep the script running
wait
