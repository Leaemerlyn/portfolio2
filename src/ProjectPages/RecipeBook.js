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