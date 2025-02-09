import '/src/components/componentsCSS/Form.css'
import { useState } from 'react'
import Recipe from '/src/components/Recipe.jsx'
import GenerateRecipe  from '/src/components/GenerateRecipe.jsx'
import IngredientList from '/src/components/IngredientList.jsx'
import { getRecipeFromMistral  } from '/src/ai.js'
import { useRef } from 'react'
import { useEffect } from 'react'

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

    // const recipeSection = useRef(null)

    useEffect(() => {
        // if (recipe.length != 0) {
        //     recipeSection.current.scrollIntoView({
        //         behavior: "smooth",
        //         block: "nearest",
        //         inline: "nearest"
        //     })
        // }
        setIngredients([])
    },[recipe])

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

