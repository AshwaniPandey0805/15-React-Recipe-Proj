import axios from "axios";
import { useState, useEffect } from "react"

export  const Home = ()=>{

    const [recipes , setRecipes] = useState([]);

    useEffect(()=>{
        const fetchRecipe = async () =>{

        try {
            const response = await axios.get("http://localhost:3000/recipes");
            setRecipes(response.data);
            console.log(response.data);
            } catch (error) {
            console.log(error);
        };

        }
        fetchRecipe();
    }, [])
    
    return(
        <div>
            <h1>Recipe</h1>
            <ul>
                {recipes.map((recipe)=>(
                    <li key={recipe._id}>
                    <div>
                        <h2>{recipe.name}</h2>
                    </div>
                    <div className="instructions" >
                        <p>{recipe.instructions}</p>
                    </div>
                    <img src={recipe.imageURL} alt={recipe.name} />
                    <p> CookingTime : {recipe.cookingTime} (minutes)</p>
                </li>
                ))}
            </ul>
        </div>
    )
};