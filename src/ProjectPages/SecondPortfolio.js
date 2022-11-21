import { ProjectDetailsIntro } from "./ProjectDetailsIntro";
import { Button } from "../Button";


export function SecondPortfolio(){
    return(
        <>
        <div className='projectPageContainer'>
            <ProjectDetailsIntro title='SecondPortfolio' />
            <hr/>
            <h1>VIEW THE WEBSITE</h1>
            <Button href={'https://leaemerlyn.github.io/portfolio/'} buttonText = 'View Second Portfolio'/>
            <hr/>

            <h1>Reflection</h1>
            <p>change this</p>
            <Button href={'https://leaemerlyn.com/'} buttonText = 'View First Portfolio Project'/>
        </div>
        </>

    )
}