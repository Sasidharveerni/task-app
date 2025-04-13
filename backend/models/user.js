const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  role: {
    type: String,
    enum: ['Admin', 'Project Manager', 'Developer', 'Designer', 'QA Engineer', 'Marketing'],
    default: 'Developer'
  },
  profilePic: {
    type: String,
    default: '/api/placeholder/40/40'
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  tasksAssigned: {
    type: Number,
    default: 0
  },
  completionRate: {
    type: Number,
    default: 0
  },
  productivityScore: {
    type: Number,
    default: 0
  },
  preferredWorkingHours: {
    start: String,
    end: String
  },
  notificationPreferences: {
    email: Boolean,
    push: Boolean,
    frequency: String // 'immediate', 'daily', 'weekly'
  },
  lastActive: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Update completion rate when tasks are completed
userSchema.methods.updateCompletionRate = function(completedTasks, totalTasks) {
  this.completionRate = Math.round((completedTasks / totalTasks) * 100);
  return this.save();
};

const User = mongoose.model('User', userSchema);

module.exports = User;