import Markdown from 'react-markdown'
import '/src/components/componentsCSS/Recipe.css'

export default function Recipe(props) {
    // console.log("in recipe(): ")
    // console.log(props.recipe)
    return (
        <section id='recipe' className='recipeContainer'>
            <h2>Recommended recipe:</h2>
            <Markdown>{props.recipe}</Markdown>
        </section>
    )
}