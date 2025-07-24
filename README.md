# 🏢 Bros Enterprise Web App

A modern, full-stack enterprise web application built with **React**, **TypeScript**, **Material-UI**, and **Node.js**. Features a professional, industry-standard design with comprehensive business management capabilities.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![Material-UI](https://img.shields.io/badge/Material--UI-5.x-0081cb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933.svg)

## ✨ Features

### 🎨 **Modern UI/UX Design**
- **Material Design 3.0** components with professional styling
- **Responsive design** that works perfectly on desktop, tablet, and mobile
- **Dark/Light theme** toggle with user preference persistence
- **Professional color scheme** and typography using Roboto font
- **Smooth animations** and transitions throughout the application

### 🔐 **Authentication & Security**
- **JWT-based authentication** with secure token management
- **Professional login page** with gradient design and social login buttons
- **Demo account** for easy testing (`demo@example.com` / `password123`)
- **Protected routes** with automatic redirection
- **Security settings** with two-factor authentication options

### 📊 **Advanced Dashboard**
- **Real-time statistics cards** with trend indicators and color-coded metrics
- **Interactive charts** using Recharts (Area, Line, Bar, Pie charts)
- **Recent activity feed** with color-coded notifications
- **Performance metrics** with animated progress bars
- **Responsive grid layout** that adapts to screen size

### 👥 **User Management**
- **Professional DataGrid** with sorting, filtering, and pagination
- **CRUD operations** (Create, Read, Update, Delete users)
- **Role-based access control** (Admin, Manager, User)
- **User status management** (Active/Inactive)
- **Statistics overview** with user metrics
- **Bulk operations** and export functionality

### 📈 **Analytics & Reporting**
- **Multiple chart types** (Line, Bar, Pie, Funnel, Composed charts)
- **Tabbed interface** for different analytics views
- **Geographic distribution** visualization
- **Traffic source breakdown** with interactive pie charts
- **Conversion funnel** analysis
- **Time range selection** for data filtering

### ⚙️ **Comprehensive Settings**
- **Tabbed interface** (Profile, Security, Notifications, Appearance, Data & Privacy)
- **Profile management** with avatar upload capability
- **Security settings** with password change and 2FA
- **Notification preferences** (Email, Push, SMS)
- **Theme and localization** settings
- **Data export** and privacy controls

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/shushi3101/BrosEnterpriseWebApp.git
cd BrosEnterpriseWebApp

# Run the setup script
./scripts/dev-setup.sh

# Start the application
./scripts/start-dev.sh
```

### Demo Access
- **URL**: http://localhost:3000/login
- **Email**: `demo@example.com`
- **Password**: `password123`

## 📱 Application Structure

```
Bros Enterprise Web App/
├── 🎨 Frontend (React + TypeScript + MUI)
│   ├── Modern login page with gradient design
│   ├── Responsive dashboard with interactive charts
│   ├── Professional user management with DataGrid
│   ├── Comprehensive analytics with multiple chart types
│   └── Feature-rich settings with tabbed interface
│
├── 🔧 Backend (Node.js + Express + TypeScript)
│   ├── RESTful API with JWT authentication
│   ├── User management endpoints
│   ├── Health monitoring and logging
│   └── CORS and security middleware
│
└── 📚 Documentation & Scripts
    ├── Deployment guide for free hosting
    ├── Troubleshooting documentation
    └── Development and demo scripts
```

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Material-UI v5** - Professional component library
- **Recharts** - Beautiful, responsive charts
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **JWT** - JSON Web Token authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Nodemon** - Development server auto-restart
- **Git** - Version control

## 🌐 API Endpoints

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/logout` - User logout
- `POST /api/v1/auth/refresh` - Refresh token

### Users
- `GET /api/v1/users/profile` - Get user profile
- `PUT /api/v1/users/profile` - Update user profile
- `GET /api/v1/users` - Get all users (admin only)

### Health
- `GET /health` - Application health check
- `GET /api` - API information

## 📊 Demo Features

Run `./scripts/demo.sh` to see a comprehensive showcase of all features:

1. **Professional Login** - Gradient design with demo credentials
2. **Interactive Dashboard** - Real-time charts and statistics
3. **User Management** - DataGrid with CRUD operations
4. **Analytics Views** - Multiple chart types and data visualization
5. **Settings Panel** - Comprehensive configuration options
6. **Theme Toggle** - Dark/Light mode switching
7. **Responsive Design** - Mobile-friendly interface

## 🚀 Deployment

### Free Hosting Options

The application can be deployed completely **FREE** using:

- **Frontend**: Vercel, Netlify, or GitHub Pages
- **Backend**: Railway, Render, or Fly.io
- **Database**: Supabase, PlanetScale, or MongoDB Atlas
- **Domain**: Freenom or GitHub Student Pack

See `docs/deployment.md` for detailed deployment instructions.

### Quick Deploy Commands

```bash
# Deploy frontend to Vercel
./scripts/deploy-frontend.sh

# Check application status
./scripts/status.sh

# Run demo showcase
./scripts/demo.sh
```

## 📚 Documentation

- **[Deployment Guide](docs/deployment.md)** - Free hosting options and setup
- **[Troubleshooting](docs/troubleshooting.md)** - Common issues and solutions
- **[API Documentation](docs/api.md)** - Complete API reference

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev              # Start both frontend and backend
npm run dev:frontend     # Start frontend only
npm run dev:backend      # Start backend only

# Building
npm run build           # Build both frontend and backend
npm run build:frontend  # Build frontend only
npm run build:backend   # Build backend only

# Testing
npm run test           # Run all tests
npm run test:frontend  # Run frontend tests
npm run test:backend   # Run backend tests

# Utilities
./scripts/status.sh    # Check application status
./scripts/demo.sh      # Run demo showcase
```

### Environment Variables

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Bros Enterprise Web App
```

**Backend (.env)**
```env
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your-super-secret-jwt-key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Material-UI** for the excellent component library
- **Recharts** for beautiful data visualization
- **React** team for the amazing framework
- **TypeScript** for type safety and developer experience

---

**🌟 Star this repository if you find it helpful!**

**🚀 Ready to deploy? Check out our [free deployment guide](docs/deployment.md)!**
