const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { authenticate } = require('../middlewares/authMiddleware');

// @route   GET /tasks
router.get('/', authenticate, async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate('assignedTo', ['username', 'role'])
      .populate('createdBy', 'username');
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST /tasks
router.post('/', authenticate, async (req, res) => {
  try {
    const { title, description, deadline, priority, category } = req.body;
    
    const newTask = new Task({
      title,
      description,
      deadline,
      priority,
      category,
      createdBy: req.user.id
    });

    const task = await newTask.save();
    await task.calculateMLScore(); // Calculate ML score on creation
    
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT /tasks/:id
router.put('/:id', authenticate, async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    // Update fields
    const { title, description, status, priority } = req.body;
    if (title) task.title = title;
    if (description) task.description = description;
    if (status) task.status = status;
    if (priority) task.priority = priority;

    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /tasks/priority
router.get('/priority', authenticate, async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.user.id })
      .sort({ mlScore: -1 })
      .limit(5);
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;