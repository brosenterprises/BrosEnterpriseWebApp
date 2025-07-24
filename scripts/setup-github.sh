#!/bin/bash

echo "🚀 Bros Enterprise Web App - GitHub Setup"
echo "========================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "📋 Steps to complete GitHub setup:"
echo ""
echo "1. Go to GitHub.com and create a new repository:"
echo "   - Repository name: BrosEnterpriseWebApp"
echo "   - Description: A production-ready enterprise web application built with React.js frontend and Node.js backend"
echo "   - Make it Public"
echo "   - Don't initialize with README (we already have one)"
echo ""
echo "2. After creating the repository, run these commands:"
echo ""
echo "   git remote set-url origin https://github.com/taluscpp/BrosEnterpriseWebApp.git"
echo "   git push -u origin main"
echo ""
echo "3. When prompted for credentials:"
echo "   - Username: taluscpp"
echo "   - Password: Use your GitHub Personal Access Token (not your password)"
echo ""
echo "4. Your token should have these permissions:"
echo "   - repo (Full control of private repositories)"
echo "   - workflow (Update GitHub Action workflows)"
echo ""
echo "🎉 Once pushed, your repository will be available at:"
echo "   https://github.com/taluscpp/BrosEnterpriseWebApp"
echo ""
echo "📚 Next steps after pushing:"
echo "   - Set up GitHub Actions secrets for CI/CD"
echo "   - Configure deployment settings"
echo "   - Invite collaborators if needed"
