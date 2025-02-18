
export default function GenerateRecipe(props) {

    return (
        <div id='generateRecipeContainer'>
            <section id='generateTextSection'>
                <p id='text1'>Ready for a recipe?</p>
                <p id='text2'>Generate a recipe from your list of ingredients.</p>
            </section>
            <button id='getRecipe-Btn' onClick={props.getRecipe}>Get a recipe</button>
        </div>
    )
}