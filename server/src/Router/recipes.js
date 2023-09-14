import express from "express";
import moongose from "mongoose";

import { RecipeModel } from "../model/Recipes.js";

const router = express.Router();

router.get("/", async (req, res)=>{
    try {
        const response = await RecipeModel.find({});
        res.json(response);
        
    } catch (error) {
        res.json(error);
    }
});

router.post("/", async (req, res)=>{
    const recipe = new RecipeModel(req.body);
    try {
        const response = await recipe.save();
        res.json(response);
    } catch (error) {
        res.json(error);
        
    }
});


export { router as recipeRouter }; 