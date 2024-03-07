import { ProjectDetailsIntro } from "./ProjectDetailsIntro";
import { Button } from "../Button";

export function RecipeBook(){
    return(
        <>
        <div class='projectPageContainer'>
            <ProjectDetailsIntro title='RecipeBook'/>
            <hr/>


            <h1>Check out the site!</h1>
            <Button href="https://leaemerlyn.github.io/Recipes/" buttonText='Project Website'/> <br/>
            
            <hr/>

            <h1>Try out the site</h1>
            <p>
                To add a recipe, click on the edit button on the bottom left corner. Then, all you need to do is to start typing out your recipe! To add tags and ingredients, just click on the plus button and press enter when you are ready to submit. To change it back to viewing mode, just click view on the bottom left corner. 
            </p>

            <h1>Going Forward</h1>
            <p>From this project I learned: <br></br>
                <ul>
                    <li>How to work with a react component library</li>
                    <li>How to use state variables</li>
                </ul>
            </p>
        </div>
        </>
    )

}