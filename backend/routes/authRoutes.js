const express = require('express'); 
const router = express.Router(); 
const User = require('../models/user'); 
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');  

// @route   POST /auth/register 
router.post('/register', async (req, res) => {   
  try {     
    const { username, email, password, role } = req.body;          
    
    // Check if user exists     
    let user = await User.findOne({ email });     
    if (user) return res.status(400).json({ msg: 'User already exists' });      
    
    // Hash password     
    const hashedPassword = await bcrypt.hash(password, 10);          
    
    // Create new user     
    const newUser = new User({        
      username,        
      email,        
      password: hashedPassword,        
      role      
    });          
    
    // Save user to database     
    await newUser.save();      
    
    // Create JWT - Use newUser._id
    const token = jwt.sign(       
      { userId: newUser._id, email: newUser.email },       
      'taskifyapp',      
      { expiresIn: '2d' }
    );   
    
    return res.status(200).json({     
      token: token,     
      message: "User registered successfully"   
    });
  } catch (err) {     
    console.error(err.message);     
    res.status(500).send('Server error');   
  } 
});  

// @route   POST /auth/login 
router.post('/login', async (req, res) => {   
  try {     
    const { email, password } = req.body;      
    
    // Check user exists     
    const user = await User.findOne({ email });     
    if (!user) {       
      return res.status(400).json({ msg: 'Invalid credentials' });     
    }      
    
    // Validate password     
    const isMatch = await bcrypt.compare(password, user.password);     
    if (!isMatch) {       
      return res.status(400).json({ msg: 'Invalid credentials' });     
    }      
    
    // Create JWT - Check the secret value
    const token = jwt.sign(
      { userId: user._id, email: user.email }, 
      'taskifyapp', 
      { expiresIn: '2d' }
    );       
    
    return res.status(200).json({       
      token: token,       
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      },
      message: "User logged in successfully"     
    });
  } catch (err) {     
    console.error(err);  // Log the full error object
    res.status(500).json({ 
      error: err.message,
      message: 'Server error'
    });   
  } 
});  

module.exports = router;