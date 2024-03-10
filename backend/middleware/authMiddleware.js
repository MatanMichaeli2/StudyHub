// // authMiddleware.js

// const jwt = require('jsonwebtoken');
// const { UserModel } = require('../models/UserModel');

// const authMiddleware = async (req, res, next) => {
//   // Check if authorization header is present
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   // Extract token from authorization header
//   const token = authHeader.split(' ')[1];

//   try {
//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
//     // Fetch user from database using the decoded user ID
//     const user = await UserModel.findById(decoded.userId);
//     if (!user) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     // Add user object to request object
//     req.user = user;

//     // Proceed to the next middleware
//     next();
//   } catch (error) {
//     console.error('Authentication error:', error);
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
// };

// module.exports = authMiddleware;
