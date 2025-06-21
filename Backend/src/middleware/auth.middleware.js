import User from "../models/User.model";
import jwt from "jsonwebtoken";
export const userProtect = async(req,res,next)=>{
    try {
       const token = req.headers.token;
       const decoded = jwt.verify(token , process.env.JWT_KEY)
       const user = await User.findById(decoded.userId).select("-password");
    
       if(!user) return res.status(404).json({success:false , message:"User not found"})
        req.user = user;
    next();
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
    }
}

export const checkAuth = (req,res)=>{
   return res.json({success:true, user: req.user});
}