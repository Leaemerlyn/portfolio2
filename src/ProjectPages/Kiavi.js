import { ProjectDetailsIntro } from "./ProjectDetailsIntro";
import { Button } from "../Button";
import pdf from './Kiavi/researchReport.pdf'
import pdf2 from './Kiavi/Presentation.pdf'

export function Kiavi(){
    return(
        <>
        <div class='projectPageContainer'>
            <ProjectDetailsIntro title= 'Kiavi'/>
            <hr/>


            <h1>Learn about the project through the site</h1>
            <Button href="https://hcii.cmu.edu/mhci/capstone/2022/kiavi/" buttonText='Project Website'/> <br/>
            
            <hr/>

            <h1>Research Findings Presentation</h1>
            <Button href={pdf} buttonText='Research Report'/> <br/>
            <Button href={pdf2} buttonText='Presentation Slides'/>

        </div>
        </>
    )

}