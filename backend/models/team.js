const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  performanceMetrics: {
    tasksCompleted: Number,
    onTimeDelivery: Number,
    communication: Number,
    quality: Number
  },
  currentWorkload: {
    totalTasks: Number,
    completedTasks: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

teamSchema.virtual('completionRate').get(function() {
  return this.currentWorkload.totalTasks > 0 
    ? Math.round((this.currentWorkload.completedTasks / this.currentWorkload.totalTasks) * 100)
    : 0;
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;