import { ProjectDetailsIntro } from "./ProjectDetailsIntro";
import { Button } from "../Button";


export function FirstPortfolio(){
    return(
        <>
        <div className='projectPageContainer'>
            <ProjectDetailsIntro title='FirstPortfolio' />
            <hr/>
            <h1>VIEW THE WEBSITE</h1>
            <Button href={'https://leaemerlyn.github.io/Old-Portfolio/'} buttonText = 'View First Portfolio'/>
            <hr/>

            <h1>Reflection</h1>
            <p>change this</p>
        </div>
        </>

    )
}

