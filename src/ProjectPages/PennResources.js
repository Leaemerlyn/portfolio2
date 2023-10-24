import { ProjectDetailsIntro } from "./ProjectDetailsIntro";
import { Button } from "../Button";

export function PennResources() {
    return(
        <>
        <div class='projectPageContainer'>
            <ProjectDetailsIntro title='PennResources'/>
            <hr/>


            <h1>Check out the site!</h1>
            <Button href="https://pennresources.web.app/" buttonText='Project Website'/> <br/>
            
            <hr/>

            <h1>Page Under Construction</h1>
        </div>
        </>
    )

}