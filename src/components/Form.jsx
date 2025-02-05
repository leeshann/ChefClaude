import '/src/components/componentsCSS/Form.css'
import { useState } from 'react'
import Recipe from '/src/components/Recipe.jsx'
import GenerateRecipe  from '/src/components/GenerateRecipe.jsx'
import IngredientList from '/src/components/IngredientList.jsx'
import { getRecipeFromMistral  } from '/src/ai.js'

export default function Form() {

    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")

    function addIngredient(formData) {
        setIngredients((prev) => (
            formData.get("newIngredient").length > 0 ? [...prev, formData.get("newIngredient")] : prev
        ))
    }

    async function getRecipe() {
        const recipeFromMistral = await getRecipeFromMistral(ingredients)
        setRecipe(recipeFromMistral)
    }

    return (
        <>
            <form className='form' action={addIngredient}>
                <input type="text" name="newIngredient" id="ingredient-input" placeholder="e.g. oregano"/>
                <button type="submit" id="add-btn" >+ Add Ingredient</button>
            </form>

            {ingredients.length > 0 && <IngredientList ingredientList={ingredients}/>}

            {ingredients.length > 0 && <GenerateRecipe getRecipe={getRecipe} />}

            {recipe && <Recipe recipe={recipe} />}   
        </>
    )
}

