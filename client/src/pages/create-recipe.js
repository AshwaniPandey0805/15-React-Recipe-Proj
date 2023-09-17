
import { useState } from "react"
import axios from "axios"
import { getUserID } from "../hook/getUserID.js";


export const CreateRecipe = ()=>{
    const userID = getUserID();

    const [recipe, setRecipe] = useState({
        name : "",
        ingredienats : [],
        instructions : "",
        imageURL : "",
        cookingTime : 0,
        UserOwner : userID,

    });

    const handleChange = (event) =>{
        const {name , value} = event.target;
        setRecipe({ ...recipe, [name] : value})
    };

    const handleIngredientChange = (event, idx) =>    
    {
        const {value} = event.target;
        const ingredienats = recipe.ingredienats;
        ingredienats[idx] = value;
        setRecipe({...recipe, ingredienats});
    };

    const addIngredients = ()=>{
        setRecipe({...recipe, ingredienats : [...recipe.ingredienats, ""]});
    }; 

    const onSubmit = async (event) =>{
        event.preventDefault();
        try {
            await axios.post("http://localhost:3000/recipes", recipe);
            alert("recipe created"); 
            
        } catch (error) {
            console.log(error);
            
        }

    }
    
    
    return (
        
        <div className = "create-recipe">
            
            <form className="form-group" onSubmit={onSubmit}>
            <h2 className="form-header">Create Recipe</h2>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    onChange={handleChange} 
                    className="form-control"
                    />
                
                <label htmlFor="ingredients">Ingredients</label>
                {recipe.ingredienats.map((ingredienat, idx)=>(
                    <input
                        key={idx}
                        type="text"
                        name="ingredienats"
                        value={ingredienat}
                        onChange={(event)=> handleIngredientChange(event, idx)}   
                    />
                ))}
                <button 
                    className="btn btn-primary m-2 p-2"
                    onClick={addIngredients}
                    type="button"
                    >
                        Add Ingredient
                </button>

                <label htmlFor="instructions">Instructions</label>
                <textarea 
                    name="instructions" 
                    id="instructions"
                    onChange={handleChange}
                    className="form-control"
                    ></textarea>
                <label htmlFor="imageURL">Image-Url</label>
                <input 
                    type="text" 
                    name="imageURL" 
                    id="imageURL" 
                    onChange={handleChange}
                    className="form-control"
                    />
                <label htmlFor="cookingTime">Cooking Time</label>
                <input 
                    type="number" 
                    name="cookingTime" 
                    id="cookingTime" 
                    onChange={handleChange}
                    className="form-control"
                    />

                <button className="btn btn-dark m-2 p-2 ">Submit</button>

            </form>
        </div>
    );
};