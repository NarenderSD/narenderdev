import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot be longer than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true,
    maxlength: [100, 'Subject cannot be longer than 100 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot be longer than 1000 characters']
  },
  phone: {
    type: String,
    trim: true,
    maxlength: [20, 'Phone number cannot be longer than 20 characters']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [100, 'Company name cannot be longer than 100 characters']
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied', 'archived'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  tags: [{
    type: String,
    trim: true
  }],
  notes: {
    type: String,
    trim: true,
    maxlength: [500, 'Notes cannot be longer than 500 characters']
  },
  ipAddress: {
    type: String,
    trim: true
  },
  userAgent: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Create indexes for better query performance
ContactSchema.index({ email: 1 });
ContactSchema.index({ status: 1 });
ContactSchema.index({ createdAt: -1 });
ContactSchema.index({ priority: 1 });

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
