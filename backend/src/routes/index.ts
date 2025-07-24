import { Router } from 'express'
import authRoutes from './auth'
import userRoutes from './users'

const router = Router()

// API version prefix
const API_VERSION = '/v1'

// Route definitions
router.use(`${API_VERSION}/auth`, authRoutes)
router.use(`${API_VERSION}/users`, userRoutes)

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Bros Enterprise API',
    version: '1.0.0',
    endpoints: {
      auth: `${API_VERSION}/auth`,
      users: `${API_VERSION}/users`,
      health: '/health'
    }
  })
})

export default router
