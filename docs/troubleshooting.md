# Troubleshooting Guide

## Common Issues and Solutions

### 🔧 Frontend Issues

#### Issue: "Failed to scan for dependencies" or "tsconfig.node.json not found"
**Solution:**
```bash
# Ensure tsconfig.node.json exists in frontend directory
cd frontend
cat > tsconfig.node.json << 'EOF'
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noEmit": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["ES2020"],
    "types": ["node"]
  },
  "include": ["vite.config.ts"]
}
EOF
```

#### Issue: "Port 3000 already in use"
**Solution:**
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- --port 3001
```

#### Issue: Vite build errors
**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
npx vite --force
```

### 🔧 Backend Issues

#### Issue: "TypeScript compilation errors"
**Solution:**
```bash
# Compile TypeScript to JavaScript
cd backend
npx tsc

# Run compiled JavaScript
node dist/server.js
```

#### Issue: "Port 5000 already in use"
**Solution:**
```bash
# Kill existing process
lsof -ti:5000 | xargs kill -9

# Or change port in backend/.env
echo "PORT=5001" >> .env
```

#### Issue: "JWT_SECRET not found"
**Solution:**
```bash
# Add JWT secret to backend/.env
cd backend
echo "JWT_SECRET=your-super-secret-key-here" >> .env
```

### 🗄️ Database Issues

#### Issue: "Database connection failed"
**Solution:**
```bash
# For development, the app uses mock data
# For production, set DATABASE_URL in .env
echo "DATABASE_URL=your-database-connection-string" >> backend/.env
```

### 🌐 Deployment Issues

#### Issue: "Build fails on Vercel/Netlify"
**Solution:**
```bash
# Ensure build works locally first
cd frontend
npm run build

# Check for TypeScript errors
npm run type-check
```

#### Issue: "API calls fail after deployment"
**Solution:**
```bash
# Update frontend environment variables
# In Vercel/Netlify dashboard, set:
VITE_API_URL=https://your-backend-domain.com/api

# Update backend CORS settings
# In backend/src/server.ts, update CORS origin
```

### 🔍 General Debugging

#### Check Application Status
```bash
./scripts/status.sh
```

#### View Logs
```bash
# Frontend logs
cd frontend && tail -f frontend.log

# Backend logs
cd backend && tail -f backend.log server.log
```

#### Restart Everything
```bash
# Kill all processes
pkill -f node
pkill -f vite

# Start fresh
./scripts/start-dev.sh
```

### 📱 Browser Issues

#### Issue: "CORS errors in browser console"
**Solution:**
```bash
# Update backend CORS settings in src/server.ts
# Add your frontend domain to allowed origins
```

#### Issue: "Network errors when calling API"
**Solution:**
```bash
# Check if backend is running
curl http://localhost:5000/health

# Check API endpoint
curl http://localhost:5000/api
```

### 🛠️ Development Tools

#### Useful Commands
```bash
# Check what's running on ports
lsof -i :3000
lsof -i :5000

# Monitor processes
ps aux | grep node

# Check network connections
netstat -an | grep LISTEN
```

#### Environment Variables Check
```bash
# Frontend
cd frontend && cat .env

# Backend
cd backend && cat .env
```

### 🆘 Getting Help

If you're still having issues:

1. **Check the logs** in `frontend.log` and `backend.log`
2. **Run status check**: `./scripts/status.sh`
3. **Verify dependencies**: `npm install` in both frontend and backend
4. **Clear caches**: Delete `node_modules` and reinstall
5. **Check GitHub Issues**: https://github.com/shushi3101/BrosEnterpriseWebApp/issues

### 📞 Quick Fixes

```bash
# Nuclear option - restart everything
pkill -f node && sleep 2 && ./scripts/start-dev.sh

# Reset to clean state
git clean -fd && npm install && ./scripts/dev-setup.sh
```
