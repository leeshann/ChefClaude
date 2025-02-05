export default function IngredientList({ingredientList}) {
    return (
        <>
            <h2>Ingredients on hand:</h2>
            <ul>
                {ingredientList.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
        </>
    )
}