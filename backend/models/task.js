const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  assignedTo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  deadline: {
    type: Date,
    required: true
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Critical'],
    default: 'Medium'
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed', 'On Hold', 'Cancelled'],
    default: 'Not Started'
  },
  category: {
    type: String,
    enum: ['Development', 'Design', 'Research', 'Meetings', 'Documentation', 'Marketing', 'Personal'],
    default: 'Development'
  },
  tags: [{
    type: String,
    trim: true
  }],
  mlScore: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  mlPriorityReason: {
    type: String,
    trim: true
  },
  dependencies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  timeEstimate: {
    type: Number, // in hours
    min: 0
  },
  timeSpent: {
    type: Number, // in hours
    min: 0,
    default: 0
  },
  completionDate: Date,
  attachments: [{
    name: String,
    url: String,
    uploadedAt: Date
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    text: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
});

// Update timestamps before saving
taskSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Calculate ML score based on priority, deadline proximity, and other factors
taskSchema.methods.calculateMLScore = function() {
  const now = new Date();
  const timeDiff = this.deadline - now;
  const daysUntilDeadline = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
  let score = 0;
  
  // Priority weighting
  if (this.priority === 'High') score += 50;
  else if (this.priority === 'Medium') score += 30;
  else score += 10;
  
  // Deadline proximity weighting
  if (daysUntilDeadline <= 1) score += 40;
  else if (daysUntilDeadline <= 3) score += 30;
  else if (daysUntilDeadline <= 7) score += 20;
  else score += 10;
  
  // Dependencies weighting
  if (this.dependencies && this.dependencies.length > 0) {
    score += 20;
  }
  
  // Ensure score is between 0-100
  this.mlScore = Math.min(Math.max(score, 0), 100);
  
  return this.save();
};

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;