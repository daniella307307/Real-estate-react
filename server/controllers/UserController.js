const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET
const register = async(req, res)=>{
try {
    const { name, email, password, role, comfirmPassword,bio } = req.body;
    if (!email || !password|| !role ||!name){
        return res.status(400).json({message:"All fields are required"})
    }
    const existingUser = await User.findOne({email});
    if (existingUser){
        return res.status(400).json({message:"Email already exists"});
    }else{
        if(password.length < 6){
            return res.status(400).json({message:"The password must be at least 6 characters"});
        }
        if (!password === comfirmPassword){
            return res.status(400).json({message:"passwords mismatched"});
        } 
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({name:name,email:email,password:hashedPassword,role:role,bio:bio});
        if(user){
            await user.save();
            const token = jwt.sign({id: user.id, email:user.email}, secret, {expiresIn:'24h'})
            res.status(200).json({message:"user saved successfully", token});
        }
    }
    

} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
}

}

const login = async (req, res) => {
    try {
        const { email, password} = req.body;
        if(!email || !password) {
            return res.status(401).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email: email})
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ message: "Invalid credentials"})
        }
        const token = jwt.sign({id: user.id, email:user.email}, secret, {expiresIn:"24h"})

        return res.status(200).json({message:"Login successful", token: token})
    } catch (error) {
        console.error(error);
        return res.status(500).json({message:"Server error"})
    }
}

const logout = async( req, res)=>{
    try {
        const token = req.header('Authorization')?.split(' ')[1]; // Extract token
        if (!token) {
            return res.status(400).json({ message: "No token provided" });
        }

        // Add the token to the blacklist
        blacklist.add(token);

        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
}
const updateUser =async (req, res)=>{
   try {
    const userId = req.user.id;
    const updates = req.body;

    // Validate input (you can use validation libraries like Joi or Yup for better validation)
        if (!updates || Object.keys(updates).length === 0) {
            return res.status(400).json({ message: "No updates provided" });
        } 

        const updateUser = await User.findByIdAndUpdate(userId,
            {$set:updates},
            {new: true, runValidators: true}
        );
        if (!updateUser){
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated",user:updateUser});
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: "Server error"})
   }
}
const getUser= async (req, res) => {
    try {
        const email = req.body.email;
        const user = await User.findOne(email)
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }else{
            return res.status(200).json(user);
        }
    }catch(err){
        console.error(err);
        res.status(500).json({ message:"Internal Server Error" });
    }
}

module.exports = {
    register: register,
    login:login,
    logout: logout,
    updateUser: updateUser,
    getUser: getUser
}