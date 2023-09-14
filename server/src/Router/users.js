import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../model/User.js";

const router  = express.Router();

router.post("/register", async(req, res)=>{
    const {username, password} = req.body;

    const user  = await UserModel.findOne({username , });
    if(user){
        return res.json({message : "User already exists!.."});
    }
    const hashesPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({username, password : hashesPassword});
    await newUser.save();

    res.json(newUser);
});

router.post("/login", async(req, res)=>{
    const {username , password } = req.body;
    const user  = await UserModel.findOne({username});
    if(!user){
        res.json({message : "User doesn't exists"});
    }
    
    const userPassword = await bcrypt.compare(password, user.password);

    if(!userPassword){
        res.json({message : "Username and password is invalid!!"});
    }

    const token = jwt.sign({id : user._id}, "secret");
    res.json({token , userID : user._id});
})










export {router as userRouter};