const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Task = require('../models/Task');
const { authenticate } = require('../middlewares/authMiddleware');

// @route   GET /users/me
router.get('/me', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select('-password')
      .populate('team');
      
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /users/stats
router.get('/stats', authenticate, async (req, res) => {
  try {
    const stats = await Task.aggregate([
      { $match: { assignedTo: req.user.id } },
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          completed: { 
            $sum: { $cond: [{ $eq: ["$status", "Completed"] }, 1, 0] }
          }
        }
      }
    ]);
    
    res.json(stats[0] || { total: 0, completed: 0 });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;