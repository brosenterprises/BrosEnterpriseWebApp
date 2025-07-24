# Bros Enterprise Web App

A production-ready enterprise web application built with React.js frontend and Node.js backend.

## 🏗️ Architecture

```
BrosEnterpriseWebApp/
├── frontend/          # React.js application
├── backend/           # Node.js API server
├── shared/            # Shared utilities and types
├── docs/              # Documentation
├── scripts/           # Build and deployment scripts
├── docker/            # Docker configurations
├── tests/             # Integration and E2E tests
└── config/            # Environment configurations
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Docker and Docker Compose (optional)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/shushi3101/BrosEnterpriseWebApp.git
   cd BrosEnterpriseWebApp
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Docker Setup (Alternative)

```bash
docker-compose up -d
```

## 📦 Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both applications for production
- `npm run test` - Run all tests
- `npm run lint` - Run linting for both applications
- `npm run install:all` - Install dependencies for all packages

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Query** for state management
- **React Router** for navigation
- **Axios** for API calls

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **Prisma** for database ORM
- **JWT** for authentication
- **Helmet** for security
- **Rate limiting** and **CORS** configured

### DevOps & Tools
- **ESLint** and **Prettier** for code quality
- **Husky** for git hooks
- **Jest** and **Cypress** for testing
- **Docker** for containerization
- **GitHub Actions** for CI/CD

## 🔧 Environment Variables

Copy the example environment files and configure them:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

## 📚 Documentation

- [API Documentation](./docs/api.md)
- [Frontend Guide](./docs/frontend.md)
- [Backend Guide](./docs/backend.md)
- [Deployment Guide](./docs/deployment.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Shubhit Talus** - *Lead Developer* - [taluscpp@gmail.com](mailto:taluscpp@gmail.com)

---

Built with ❤️ by Bros Enterprise Team
