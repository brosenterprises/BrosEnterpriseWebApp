import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { authenticateToken } from '../middleware/auth'

const router = Router()
const userController = new UserController()

// Get current user profile
router.get('/profile', authenticateToken, userController.getProfile)

// Update user profile
router.put('/profile', authenticateToken, userController.updateProfile)

// Get all users (admin only)
router.get('/', authenticateToken, userController.getAllUsers)

export default router
