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
            <p>For this portfolio, I only used vanilla HTML and CSS. The biggest challenge was making a vertical navigation bar. </p>
            <Button href={'https://leaemerlyn.github.io/portfolio/'} buttonText ='View Second Portfolio'></Button>
        </div>
        </>

    )
}

