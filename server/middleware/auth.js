const jwt = require("jsonwebtoken");
require('dotenv').config();
const secret = process.env.SECRET;


const authenticate = (req,res,next) => {
   const token = req.header("Authorization")?.split(' ')[1];
   console.log("Authorization Header:", token); 

   if (!token){
    return res.status(401).json({message:"Acces denied. No token available."});
   }

   try{
    const verified = jwt.verify(token,secret);;
    req.user = verified;
    next();
   }catch(err){
    res.status(401).json({message:"Invalid token."});
   }
}
// Middleware to check token blacklist
const isTokenBlacklisted = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (blacklist.has(token)) {
        return res.status(401).json({ message: "Token is invalidated" });
    }
    next();
};

module.exports =authenticate;