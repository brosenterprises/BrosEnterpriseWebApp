#!/bin/bash

# Verify build output for GitHub Pages
echo "🔍 Verifying build output for GitHub Pages..."

cd frontend

if [ ! -d "dist" ]; then
    echo "❌ No dist directory found. Run 'npm run build' first."
    exit 1
fi

echo "📁 Build directory contents:"
ls -la dist/

echo ""
echo "📄 Checking index.html for correct asset paths..."
if grep -q "/BrosEnterpriseWebApp/assets/" dist/index.html; then
    echo "✅ Asset paths are correct for GitHub Pages"
    echo "📋 Found paths:"
    grep -o "/BrosEnterpriseWebApp/assets/[^\"]*" dist/index.html
else
    echo "❌ Asset paths are incorrect"
    echo "📋 Current paths in index.html:"
    grep -o "/[^\"]*\.js\|/[^\"]*\.css" dist/index.html
fi

echo ""
echo "📊 Build size summary:"
du -sh dist/
echo ""
echo "🎯 Your site will be available at:"
echo "https://shushi3101.github.io/BrosEnterpriseWebApp/"
