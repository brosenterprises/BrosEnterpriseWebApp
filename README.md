# 📈 Bros Enterprise Trading Platform

A modern, full-stack **Indian stock brokerage trading platform** built with **React**, **TypeScript**, **Material-UI**, and **Node.js**. Inspired by leading Indian trading apps like **Groww**, **Zerodha**, and **Upstox** with professional-grade trading features.

![Version](https://img.shields.io/badge/version-3.0.0-green.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![Material-UI](https://img.shields.io/badge/Material--UI-5.x-00D09C.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6.svg)
![Trading](https://img.shields.io/badge/Trading-Platform-00D09C.svg)

## 🎯 Trading Platform Features

### 📈 **Professional Trading Interface**
- **Dark theme optimized** for trading (like Zerodha/Groww)
- **Live market ticker** with NIFTY 50, SENSEX, and BANK NIFTY
- **Real-time P&L tracking** with profit/loss color coding
- **Professional trading terminology** and layouts
- **Responsive design** for mobile and desktop trading

### 💹 **Portfolio Management**
- **Real-time portfolio performance** charts and analytics
- **Detailed holdings table** with stock symbols, LTP, and day changes
- **P&L calculations** with percentage gains/losses
- **Holdings breakdown** with interactive pie charts
- **Buy/Sell action buttons** with trading-specific colors

### 🔐 **Trading Authentication**
- **Professional login page** with market data preview
- **Demo trading account** with ₹10,00,000 virtual money
- **JWT-based security** with trading session management
- **Demo credentials**: `demo@example.com` / `password123`

### 📊 **Advanced Analytics**
- **Interactive financial charts** using Recharts
- **Portfolio performance tracking** with time-series data
- **Market analysis tools** and trading statistics
- **Real-time data visualization** with profit/loss indicators

### 🎨 **Indian Brokerage Design**
- **Groww-inspired color scheme** with profit green (#00D09C)
- **Professional trading cards** and layouts
- **Inter font** for modern, clean typography
- **Market data integration** in navigation and sidebar
- **Trading-specific UI patterns** and interactions

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

# Start the trading platform
./scripts/start-dev.sh
```

### Demo Trading Account
- **URL**: http://localhost:3000/login
- **Email**: `demo@example.com`
- **Password**: `password123`
- **Virtual Money**: ₹10,00,000

## 📱 Trading Platform Structure

```
Bros Enterprise Trading Platform/
├── 🎯 Frontend (React + TypeScript + Trading Theme)
│   ├── Professional trading login with market data
│   ├── Real-time trading dashboard with P&L charts
│   ├── Portfolio management with holdings table
│   ├── Live market ticker (NIFTY/SENSEX/BANK NIFTY)
│   └── Trading analytics with financial charts
│
├── 🔧 Backend (Node.js + Express + Trading API)
│   ├── JWT authentication for trading sessions
│   ├── Portfolio and trading endpoints
│   ├── Real-time market data simulation
│   └── Trading-specific business logic
│
└── 📚 Trading Documentation & Scripts
    ├── Trading demo showcase script
    ├── Deployment guide for trading platforms
    └── Professional trading documentation
```

## 🛠️ Technology Stack

### Frontend (Trading UI)
- **React 18** - Modern React with trading hooks
- **TypeScript** - Type-safe trading development
- **Material-UI v5** - Custom trading theme
- **Recharts** - Financial data visualization
- **Inter Font** - Professional trading typography
- **Trading Theme** - Dark mode optimized for trading

### Backend (Trading API)
- **Node.js** - JavaScript runtime for trading backend
- **Express.js** - Trading API framework
- **JWT** - Secure trading session management
- **TypeScript** - Type-safe trading backend

## 📈 Trading Features Demo

Run `./scripts/trading-demo.sh` to see all trading features:

### 🌟 **Trading Login Experience**
- Groww-inspired gradient design with dark theme
- Live market data preview (NIFTY, SENSEX, BANK NIFTY)
- Professional trading platform branding
- Virtual ₹10,00,000 demo account

### 📊 **Trading Dashboard**
- Real-time portfolio performance charts
- Live P&L tracking with color coding
- Holdings breakdown with pie charts
- Top stocks with live price updates
- Recent trades history with status

### 💼 **Portfolio Management**
- Detailed holdings table with P&L calculations
- Real-time stock prices and day changes
- Portfolio summary with total returns
- Buy/Sell action buttons
- Professional trading data presentation

### 📈 **Trading Analytics**
- Advanced financial charting
- Performance metrics and KPIs
- Market analysis tools
- Trading statistics and insights

## 🎯 Indian Brokerage Inspiration

### **Design Elements from Leading Platforms:**
- **Groww**: Green primary color (#00D09C) and clean layouts
- **Zerodha**: Dark theme and professional data presentation
- **Upstox**: Modern typography and responsive design
- **Angel One**: Real-time market data integration

### **Trading-Specific Features:**
- Live market ticker in header
- Portfolio P&L with color coding
- Stock symbols and company names
- Quantity, LTP, and day change displays
- Professional trading terminology
- Buy/Sell buttons with trading colors

## 🌐 Trading API Endpoints

### Authentication
- `POST /api/v1/auth/login` - Trading account login
- `POST /api/v1/auth/register` - New trading account
- `POST /api/v1/auth/logout` - Trading session logout

### Portfolio & Trading
- `GET /api/v1/portfolio` - Get portfolio holdings
- `GET /api/v1/trades` - Get trading history
- `POST /api/v1/orders` - Place buy/sell orders
- `GET /api/v1/market-data` - Live market data

### Health & Status
- `GET /health` - Trading platform health
- `GET /api` - Trading API information

## 🚀 Deployment for Trading Platform

### Free Hosting Options for Trading Apps

The trading platform can be deployed **FREE** using:

- **Frontend**: Vercel, Netlify (optimized for trading UIs)
- **Backend**: Railway, Render (suitable for trading APIs)
- **Database**: Supabase, PlanetScale (for trading data)
- **Domain**: Custom domain for professional trading platform

### Quick Deploy Commands

```bash
# Deploy trading platform to Vercel
./scripts/deploy-frontend.sh

# Check trading platform status
./scripts/status.sh

# Run trading demo showcase
./scripts/trading-demo.sh
```

## 📊 Trading Demo Walkthrough

```bash
# Run the comprehensive trading demo
./scripts/trading-demo.sh
```

**Demo Steps:**
1. Visit the professional trading login page
2. Notice the live market data and trading branding
3. Login with demo credentials (₹10,00,000 virtual money)
4. Explore the trading dashboard with real-time charts
5. Check portfolio page for detailed stock holdings
6. Try the dark/light theme toggle
7. Notice the live market ticker in header

## 🎨 Trading Theme Customization

### Color Palette
```css
/* Profit/Success Green (Groww-inspired) */
--profit-green: #00D09C;

/* Loss/Error Red */
--loss-red: #EB5B3C;

/* Dark Trading Background */
--trading-dark: #0B0E11;

/* Trading Card Background */
--card-dark: #161A1E;
```

### Typography
```css
/* Professional Trading Font */
font-family: 'Inter', 'Roboto', 'Helvetica', sans-serif;
```

## 🔧 Development

### Available Scripts

```bash
# Trading Development
npm run dev              # Start trading platform
npm run dev:frontend     # Start trading UI only
npm run dev:backend      # Start trading API only

# Trading Build
npm run build           # Build trading platform
npm run build:frontend  # Build trading UI
npm run build:backend   # Build trading API

# Trading Demo
./scripts/trading-demo.sh    # Run trading demo
./scripts/status.sh          # Check platform status
```

### Environment Variables

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Bros Enterprise Trading Platform
VITE_TRADING_MODE=demo
```

**Backend (.env)**
```env
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your-trading-jwt-secret
TRADING_MODE=demo
```

## 📚 Trading Documentation

- **[Trading Demo Guide](scripts/trading-demo.sh)** - Complete feature showcase
- **[Deployment Guide](docs/deployment.md)** - Deploy trading platform
- **[Troubleshooting](docs/troubleshooting.md)** - Common trading issues

## 🤝 Contributing to Trading Platform

1. Fork the trading platform repository
2. Create a trading feature branch (`git checkout -b feature/trading-feature`)
3. Commit your trading changes (`git commit -m 'Add trading feature'`)
4. Push to the branch (`git push origin feature/trading-feature`)
5. Open a Pull Request for trading features

## 📄 License

This trading platform is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Groww** for the inspiring green color scheme and clean design
- **Zerodha** for the professional dark theme and data presentation
- **Upstox** for modern trading UI patterns
- **Material-UI** for the excellent component library
- **Recharts** for beautiful financial data visualization

---

**🌟 Star this repository if you find this trading platform helpful!**

**📈 Ready to deploy your trading platform? Check out our [deployment guide](docs/deployment.md)!**

**💹 Experience the demo: http://localhost:3000 (demo@example.com / password123)**
