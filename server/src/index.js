import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter} from "./Router/users.js"
 
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect("mongodb+srv://ashwani0805:recipes12345@recipe.hpthq0o.mongodb.net/recipe?retryWrites=true&w=majority")




app.listen(3001, ()=> console.log("Server started"));