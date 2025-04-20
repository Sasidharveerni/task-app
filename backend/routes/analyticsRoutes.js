const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { authenticate } = require('../middleware/authMiddleware');

// @route   GET /analytics/productivity
router.get('/productivity', authenticate, async (req, res) => {
  try {
    const productivityData = await Task.aggregate([
      { $match: { createdBy: req.user.id } },
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 },
          completed: { $sum: { $cond: [{ $eq: ["$status", "Completed"] }, 1, 0] } }
        }
      },
      { $sort: { "_id": 1 } }
    ]);

    res.json(productivityData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /analytics/category-distribution
router.get('/category-distribution', authenticate, async (req, res) => {
  try {
    const distribution = await Task.aggregate([
      { $match: { createdBy: req.user.id } },
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 }
        }
      }
    ]);
    
    res.json(distribution);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;