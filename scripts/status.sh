#!/bin/bash

echo "🔍 Bros Enterprise Web App - Status Check"
echo "=========================================="

# Check if frontend is running
echo "📱 Frontend (React):"
if curl -s -I http://localhost:3000 | grep -q "200 OK"; then
    echo "   ✅ Running on http://localhost:3000"
else
    echo "   ❌ Not running"
fi

# Check if backend is running
echo ""
echo "🔧 Backend (Node.js API):"
if curl -s http://localhost:5000/health > /dev/null 2>&1; then
    echo "   ✅ Running on http://localhost:5000"
    echo "   📊 Health: $(curl -s http://localhost:5000/health | jq -r '.status')"
else
    echo "   ❌ Not running"
fi

# Check API endpoints
echo ""
echo "🌐 API Endpoints:"
if curl -s http://localhost:5000/api > /dev/null 2>&1; then
    echo "   ✅ Main API: http://localhost:5000/api"
    echo "   ✅ Auth: http://localhost:5000/api/v1/auth"
    echo "   ✅ Users: http://localhost:5000/api/v1/users"
else
    echo "   ❌ API not accessible"
fi

# Check processes
echo ""
echo "🔄 Running Processes:"
FRONTEND_PID=$(ps aux | grep vite | grep -v grep | awk '{print $2}' | head -1)
BACKEND_PID=$(ps aux | grep "node dist/server.js" | grep -v grep | awk '{print $2}' | head -1)

if [ -n "$FRONTEND_PID" ]; then
    echo "   📱 Frontend PID: $FRONTEND_PID"
else
    echo "   📱 Frontend: Not running"
fi

if [ -n "$BACKEND_PID" ]; then
    echo "   🔧 Backend PID: $BACKEND_PID"
else
    echo "   🔧 Backend: Not running"
fi

echo ""
echo "🚀 Quick Actions:"
echo "   Start: ./scripts/start-dev.sh"
echo "   Deploy: ./scripts/deploy-frontend.sh"
echo "   Docs: ./docs/deployment.md"
echo ""
echo "🌐 Repository: https://github.com/shushi3101/BrosEnterpriseWebApp"
