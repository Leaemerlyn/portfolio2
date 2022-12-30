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

            <h1>Research Findings Presentation</h1>
            <Button href={pdf} buttonText='Research Report'/> <br/>
            <Button href={pdf2} buttonText='Presentation Slides'/>
            <hr/>

            <h1>More Coming Soon</h1>
    
        </div>
        </>
    )

}