import { Request, Response } from 'express'

export class UserController {
  async getProfile(req: Request, res: Response) {
    try {
      // TODO: Get user from database using req.user.userId
      const user = {
        id: '1',
        email: 'demo@example.com',
        name: 'Demo User',
        createdAt: new Date()
      }

      res.json({
        user
      })
    } catch (error) {
      console.error('Get profile error:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  async updateProfile(req: Request, res: Response) {
    try {
      const { name } = req.body
      
      // TODO: Update user in database
      const updatedUser = {
        id: '1',
        email: 'demo@example.com',
        name: name || 'Demo User',
        updatedAt: new Date()
      }

      res.json({
        message: 'Profile updated successfully',
        user: updatedUser
      })
    } catch (error) {
      console.error('Update profile error:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      // TODO: Implement admin check and get users from database
      const users = [
        {
          id: '1',
          email: 'demo@example.com',
          name: 'Demo User',
          createdAt: new Date()
        }
      ]

      res.json({
        users,
        total: users.length
      })
    } catch (error) {
      console.error('Get all users error:', error)
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
