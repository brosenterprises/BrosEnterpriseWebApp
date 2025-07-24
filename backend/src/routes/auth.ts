import { Router } from 'express'
import { body } from 'express-validator'
import { AuthController } from '../controllers/AuthController'
import { validateRequest } from '../middleware/validateRequest'

const router = Router()
const authController = new AuthController()

// Register route
router.post('/register',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
    body('name').trim().isLength({ min: 2 })
  ],
  validateRequest,
  authController.register
)

// Login route
router.post('/login',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').exists()
  ],
  validateRequest,
  authController.login
)

// Refresh token route
router.post('/refresh', authController.refreshToken)

// Logout route
router.post('/logout', authController.logout)

export default router
