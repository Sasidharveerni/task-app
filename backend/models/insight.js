const mongoose = require('mongoose');

const insightSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  peakProductivityTimes: {
    start: String,
    end: String
  },
  mostEfficientTaskTypes: [{
    taskType: String,
    efficiencyScore: Number
  }],
  collaborationImpact: {
    withUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    efficiencyBoost: Number
  },
  recommendations: [{
    text: String,
    matchScore: Number,
    implementationStatus: {
      type: String,
      enum: ['Pending', 'Implemented', 'Rejected'],
      default: 'Pending'
    }
  }],
  overallProductivityScore: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Insight = mongoose.model('Insight', insightSchema);

module.exports = Insight;