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
            <p>Some key designs that I wanted to implement were:
                <ul>
                    <li><p>Background changing colors</p></li>
                    <li><p>Buttons change colors everytime you hover</p></li>
                    <li><p>Bubbles floating down the screen</p></li>
                    <li><p>User's cursor moves bubbles away</p></li>
                </ul>
                From a development perspective, this portfolio was a significant improvement over my first portfolio because there was a separation of concern and I also improved the responsiveness of the site. 
            </p>
            <Button href={'https://leaemerlyn.github.io/Old-Portfolio/'} buttonText = 'View First Portfolio Project'/>
        </div>
        </>

    )
}