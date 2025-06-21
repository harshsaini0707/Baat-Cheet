import { generateToken } from "../lib/utils";
import User from "../models/User.model";

export const signup = async(req,res)=>{
    try {
        const {fullName , email , password , bio} = req.body;
        if(!fullName || !email || !password || !bio){
          return res.status(404).json({success:false , message:"Missing Details!!"});  
        }
        const user = await User.findOne({email});
        
        if(user){
         return res.status(404).json({success:false , message:"Account already Exists!!"});     
        }
        const salt = await bcrypt.genSalt(10);
        const hassedPassword = await bcrypt.hash(password,salt);

        const newUser = await User.create({
          fullName , email , password:hassedPassword , bio  
        })

        const token = generateToken(newUser._id);
        return res.json({success:true,userData : newUser , token , message:"Account Created!!"})

    } catch (error) {
      return res.status(500).json ({success:false , message:error.message}) 
    }
}  


export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const userData = await User.findOne({email});

        const isPasswordCorrect = await bcrypt.compare(password, userData.password);

        if(!isPasswordCorrect || !userData){
                return res.status(404).json({success:false , message:"Invalid Credentials!!"})
        }

        const token = generateToken(newUser._id);
        return res.json({success:true,userData : newUser , token , message:"Login Successfull"})

    } catch (error) {
      return res.status(500).json ({success:false , message:error.message})   
    }
}

